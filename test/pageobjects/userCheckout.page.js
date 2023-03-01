import UserBasePage from "./userBase.page.js";

class UserCheckoutPage extends UserBasePage
{
    
    get COD_radiobtn () {
        return $('//span[contains(.,"Cash on Delivery")]');
    }

    get Paypal_radiobtn () {
        return $('//span[contains(.,"Paypal")]');
    }

    get Order_btn () {
        return $('input[value="Order Now"]');
    }
    

}

export default new UserCheckoutPage();
