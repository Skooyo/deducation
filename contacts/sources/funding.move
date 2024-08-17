/**
  * Funding Manager:
  * 1. Store Funding Liquidity Pool to be distributed to teachers participating in the funding
  * 2. Funding Owner will initialize a Funding Account
  * 3. Teachers will participate in the Funding
  * 4. Funds will be collected in the pool from Protocol Revenue from Bounty Rewards
  * 5. Funds will be distributed to all teachers using Quadratic Funding Method,
  *    determined based on number of participants signing up the course & winning bounties (Not Implemented Yet)
 */
module deducation::funding{
    use deducation::learn_token::{LearnToken};
    use aptos_framework::coin::{Self, Coin};
    use std::vector;
    use std::signer;
    
    struct Funding has key{
        owner: address,
        balance: Coin<LearnToken>,
        participants: vector<address>,
    }

    public entry fun initialize_funding(caller:&signer){
        let caller_address = signer::address_of(caller);
        // Initialize A New Funding Account
        let funding = Funding{
            owner: caller_address,
            balance: coin::zero<LearnToken>(),
            participants: vector::empty<address>(),
        };
        move_to(caller, funding);
    }

    public entry fun participate_funding(caller:&signer, funding_address:address)acquires Funding{
        let caller_address = signer::address_of(caller);
        // Find the Funding Account
        let funding_account = borrow_global_mut<Funding>(funding_address);
        // Add Teacher (Participant) to the Funding
        vector::push_back(&mut funding_account.participants, caller_address);
    }

    public entry fun fund_user(caller:&signer, funding_address:address, receiver:address, amount:u64)acquires Funding{
        // Find Funding Account
        let funding_account = borrow_global_mut<Funding>(funding_address);
        // Calculate the fee
        let funding_fee = amount/10;
        let bounty_reward = amount - funding_fee;
        // Add the Protocol Fee to the Funding
        let funding_balance = coin::withdraw<LearnToken>(caller, funding_fee);
        coin::merge<LearnToken>(&mut funding_account.balance, funding_balance);
        // Transfer the rest of the balance to the user
        coin::transfer<LearnToken>(caller, receiver, bounty_reward);
    }

    // public entry fun distribute_funds <NOT IMPLEMENTED YET>
}