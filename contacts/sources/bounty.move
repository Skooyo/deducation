/**
  * Bounty Manager:
  * Manages the initialization & distribution of bounty projects
  * 1. Company Initialize Bounty Projects
  * 2. Company Add Allocated Fund to Bounty Pool (Can be done multiple times)
  * 3. Users submit their projects to the bounty
  * 4. Company selects bounty winners, then distribute funds using the Protocol Funding Manager
  * Additional Bounty & Submission data is stored off-chain (IPFS)
*/
module deducation::bounty_project{
    use deducation::learn_token::{LearnToken};
    use deducation::funding::fund_user;
    use aptos_framework::coin::{Self, Coin};
    use std::string::{String};
    use std::signer;
    use std::vector;

    const ENOT_AUTHORIZED :u64 = 1;

    struct Bounty has key{
        owner: address,
        name: String,
        uri: String,
        funding_address: address,
        balance: Coin<LearnToken>,
        submissions: vector<Submission>,
    }

    struct Submission has key, store{
        owner: address,
        bounty_owner: address,
        uri: String, 
    }

    public entry fun initialize_bounty(caller: &signer, name: String, uri: String, funding_address: address){
        let caller_address = signer::address_of(caller);
        // Initialzie A New Bounty Project
        let bounty = Bounty{
            owner: caller_address,
            name,
            uri,
            funding_address,
            balance: coin::zero<LearnToken>(),
            submissions: vector::empty<Submission>(),
        };
        move_to(caller, bounty);
    }

     public entry fun add_submission(caller:&signer, bounty_owner: address, uri: String)acquires Bounty{
        let caller_address = signer::address_of(caller);
        // Create the submission data
        let submission = Submission{
            owner: caller_address,
            bounty_owner,
            uri, 
        };
        // Get the Bounty Data
        let bounty = borrow_global_mut<Bounty>(bounty_owner); 
        // Initiate the submission
        vector::push_back(&mut bounty.submissions, submission);
    }

    public entry fun fund_bounty(caller: &signer, amount: u64) acquires Bounty{
        let caller_address = signer::address_of(caller);
        // Grab the Bounty Data
        let bounty = borrow_global_mut<Bounty>(caller_address); 
        assert!(bounty.owner == caller_address, ENOT_AUTHORIZED);

        // Withdraw the coin from the caller  
        let coins = coin::withdraw<LearnToken>(caller, amount);
        // Send the coin to the bounty balance
        coin::merge<LearnToken>(&mut bounty.balance, coins);
    }

    public entry fun distribute_rewards(caller: &signer, receiver_i: u64, amount: u64) acquires Bounty{
        let caller_address = signer::address_of(caller);
        // Grab the Bounty Data
        let bounty = borrow_global_mut<Bounty>(caller_address); 
        assert!(bounty.owner == caller_address, ENOT_AUTHORIZED); 

        // Find the Bounty Winner
        let submission = vector::borrow<Submission>(&bounty.submissions, receiver_i);

        // Extract the token from the Bounty Pool & temporarily stores at Owner's account
        let distributed_balance = coin::extract<LearnToken>(&mut bounty.balance, amount);
        coin::deposit(caller_address, distributed_balance);
        // Distribute the funds to the Protocol & Bounty Winner
        fund_user(caller, bounty.funding_address, submission.owner, amount);
    }

    #[view]
    public fun get_bounty_name(bounty_owner: address): String acquires Bounty{
        let bounty = borrow_global_mut<Bounty>(bounty_owner);
        bounty.name
    }
}