/**
  * Token Manager of $LEARN token (Utility Token of Deducation)
  * 1. Initialize & Mint Token to Token Creator's Address
  * 2. Register Coin for users to receive $LEARN token in their address
  * 3. Transfer $LEARN tokens to another user
*/
module deducation::learn_token{
    use aptos_framework::coin::{Self, MintCapability, BurnCapability};
    use std::signer;
    use std::string::utf8;

    const ENOT_REGISTERED: u64 = 1;

    struct LearnToken{}

    struct Caps<phantom CoinType> has key{
        mint: MintCapability<CoinType>,
        burn: BurnCapability<CoinType>,
    }

    /** Initialize A New Learn Token */
    public entry fun initialize_coin(caller: &signer) {
        // Initialize The Token Accounts
        let (burn_account, freeze_account, mint_account) =
            coin::initialize<LearnToken>(caller,
                utf8(b"Learn Token"), utf8(b"LEARN"), 6, true);
        // Destroy the Freeze Account (Not Used)
        coin::destroy_freeze_cap(freeze_account);
        // Register Token Address for initializer
        coin::register<LearnToken>(caller);
        // 
        move_to(caller, Caps<LearnToken> { mint: mint_account, burn: burn_account });
    }

    /** Mint Token to the Owner's Address */
    public entry fun mint_coin<CoinType>(caller: &signer, amount: u64) acquires Caps {
        let caller_address = signer::address_of(caller);
        // Borrow the Account of the caller
        let caps = borrow_global<Caps<CoinType>>(caller_address);
        // Mint the coins
        let coins = coin::mint<CoinType>(amount, &caps.mint);
        // Deposit the token to the caller
        coin::deposit(caller_address, coins);
    }

    /** Register Coin Address to receive tokens */
    public entry fun register_coin(caller:&signer){
        coin::register<LearnToken>(caller);
    }

    /** Transfer Token to Another Address */
    public entry fun transfer_coin(caller: &signer, receiver: address, amount:u64){
        // Check if Receiver's Address has been registered
        assert!(coin::is_account_registered<LearnToken>(receiver), ENOT_REGISTERED );
        // Transfer Token to the receiver
        coin::transfer<LearnToken>(caller, receiver, amount);
    }
}