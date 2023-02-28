class UserCheckoutPage{
    
    get radioCOD () {
        return $('//span[contains(.,"Cash on Delivery")]');
    }

    get radioPaypal () {
        return $('//span[contains(.,"Paypal")]');
    }

    get btnOrder () {
        return $('input[value="Order Now"]');
    }
    

}

export default new UserCheckoutPage();
