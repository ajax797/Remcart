class UserHomePage{
    
    get linkHome () {
        return $('//a[contains(.,"Home")]');
    }
    
    get linkRestaurants () {
        return $('//a[.="Restaurants "]');
    }

    get linkLogin () {
        return $('//a[contains(.,"Login")]');
    }

    get linkRegister () {
        return $('//a[contains(.,"Register")]');
    }


}

export default new UserHomePage();
