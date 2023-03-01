export default class UserBasePage{
    
    get Home_link () {
        return $('//a[contains(.,"Home")]');
    }
    
    get Restaurants_link () {
        return $('//a[.="Restaurants "]');
    }

    get Login_link () {
        return $('//a[contains(.,"Login")]');
    }

    get Register_link () {
        return $('//a[contains(.,"Register")]');
    }


}


