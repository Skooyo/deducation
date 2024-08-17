/**
  * Course Manager:
  * Manages the course creation in Deducation Protocol
  * 1. Initialize a new user & participate in a funding
  * 2. Keep track of course completitions & signing up students
  * Additional Course data is stored off-chain (IPFS)
*/
module deducation::course{
    use deducation::funding::participate_funding;
    use std::string::String;
    use std::signer;
    use std::vector;
    
    struct Course has key{
        owner: address,
        name: String,
        image: String,
        uri: String,
        completions: vector<address>,
    }

    public entry fun initialize_course(caller: &signer, name: String, image: String, uri: String, funding_address: address){
        let caller_address = signer::address_of(caller);
        // Initialize New Course
        let course = Course{
            owner: caller_address,
            name,
            image,
            uri,
            completions: vector::empty<address>(),
        };
        participate_funding(caller, funding_address);
        move_to(caller, course);
    }

    public entry fun complete_course(caller: &signer, owner_address: address)acquires Course{
        let caller_address = signer::address_of(caller);
        // Find the Course Account
        let course_account = borrow_global_mut<Course>(owner_address); 
        // Add the Record of Student Completion
        vector::push_back(&mut course_account.completions, caller_address);
    }

    #[view]
    public fun get_course_name(owner_address: address): String acquires Course{
        let course_account = borrow_global_mut<Course>(owner_address);
        course_account.name
    }

    #[view]
    public fun get_course_image(owner_address: address): String acquires Course{
        let course_account = borrow_global_mut<Course>(owner_address);
        course_account.image
    }

    #[view]
    public fun get_course_data(owner_address: address): String acquires Course{
        let course_account = borrow_global_mut<Course>(owner_address);
        course_account.uri
    }
}