/**
  * User Manager:
  * Manages the users (students) in the protocol, including courses and bounties completions
  * 1. User initialize an account on the protocol
  * 2. User earn NFT Certificate when finishing a course
  * 3. User earn NFT Certificate upon successfully submitting a bounty
  * Additional Users data is stored off-chain (IPFS)
*/
module deducation::user{
    use std::string::{String, utf8};
    use std::signer;
    use std::vector;
    use deducation::learn_token::register_coin;
    use deducation::bounty_project;
    use deducation::course;
    
    struct UserAccount has key{
        owner: address,
        name: String,
        uri: String,
        certificates: vector<Certificate>,
    }

    struct Certificate has key, store{
        name: String,
        owner: address,
        uri: String,
    }

    public entry fun initialize_user(caller: &signer, name: String, uri: String){
        let caller_address = signer::address_of(caller);
        // Initialize New User Account
        let user_account = UserAccount{
            owner: caller_address,
            name,
            uri,
            certificates: vector::empty<Certificate>(),
        };
        move_to(caller, user_account);
        // Register to LEARN Token
        register_coin(caller);
    }

    public entry fun submit_bounty(caller: &signer, bounty_owner: address, uri: String)acquires UserAccount{
        // Get the name of the bounty project
        let bounty_name = bounty_project::get_bounty_name(bounty_owner);
        // Find User Account
        let caller_address = signer::address_of(caller);
        let user_account = borrow_global_mut<UserAccount>(caller_address); 
        // Add User Project Completion Certificate
        let certificate = Certificate{
            name : bounty_name, 
            owner: caller_address,
            uri  : utf8(b"https://ivory-vivacious-rooster-272.mypinata.cloud/ipfs/QmP1SbF9LG2o652WRhrYBuvudsuveBEDfpm2vroiA1UDxX"),
        };
        vector::push_back(&mut user_account.certificates, certificate);
        //Submit Bounty Project
        bounty_project::add_submission(caller, bounty_owner, uri);
    }

    public entry fun finish_course(caller: &signer, course_owner: address)acquires UserAccount{
        // Get the name of the course
        let course_name = course::get_course_name(course_owner);
        // Find User Account
        let caller_address = signer::address_of(caller);
        let user_account = borrow_global_mut<UserAccount>(caller_address); 
        // Add User Course Completion Certificate
        let certificate = Certificate{
            name : course_name, 
            owner: caller_address,
            uri  : utf8(b"https://ivory-vivacious-rooster-272.mypinata.cloud/ipfs/QmT8wq5SkAbEbSWZSeowW9BhryNuw5stq6MSF6MnbgQzYV"),
        };
        vector::push_back(&mut user_account.certificates, certificate);
        // Submit Course Completion
        course::complete_course(caller, course_owner);
    }
    
    // #[view]
    // public fun get_certificates(user_address: address):vector<Certificate> acquires UserAccount{
    //     let user_account = borrow_global_mut<UserAccount>(user_address);
    //     user_account.certificates
    // }

    // #[view]
    // public fun get_user_details(user_address: address): String acquires UserAccount{
    //     let user_account = borrow_global_mut<UserAccount>(user_address);
    //     user_account.uri
    // }

    // #[view]
    // public fun get_user_account(user_address: address): UserAccount acquires UserAccount{
    //     let user_account = &borrow_global<UserAccount>(user_address);
    //     user_account
    // }
}