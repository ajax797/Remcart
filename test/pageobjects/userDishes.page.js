import UserBasePage from "./userBase.page.js";

class UserDishesPage extends UserBasePage
{
    
    get menuHeader () {
        return $('//h3[contains(.,"MENU ")]');
    }

    get Checkout_btn () {
        return $('//a[.="Checkout"]');
    }

    get foodInCart() {
        return $('//h3[contains(.,"Your Cart")]/../../div[@class="order-row bg-white"]/div/div[@class="title-row"]')
    }

    get CartPrice() {
        return $('//h3[contains(.,"Your Cart")]/../../div[@class="order-row bg-white"]//input[@id="exampleSelect1"]')
    }

    get CartQuantity() {
        return $('//h3[contains(.,"Your Cart")]/../../div[@class="order-row bg-white"]//input[@id="example-number-input"]')
    }

    get CartTotalPrice () {
        return $('//p[.="TOTAL"]/..//strong');
    }
   
    get Restaurants_Title () {
        return $('//a[.="Jordania"]');
    } 

    foodName=''
    get foodPrice () 
    {
        return $(`//a[.="${this.foodName}"]/../../../../following-sibling::div/span`);
    }
    set select_foodName(foodName)
    {
        this.foodName=foodName
    }
    get addToCart_btn () 
    {
        return $(`//a[.="${this.foodName}"]/../../../../..//input[@type="submit"]`);
    }

    priceValue=''
    set set_priceValue(priceValue)
    {
        this.priceValue=priceValue
    }
    get CartPrice_bt () 
    {
        return $(`//input[contains(@value,"${this.priceValue}")]`);
    }

    
    get DishName () 
    {
        return $('//a[.="'+this.fname+'"]');
    }
    

}

export default new UserDishesPage();


//quantity>>>>>>>>>>['//a[.="Chicken Madeira"]/../../../../..//input[@name="quantity"]']
//price>>>>>>>>>>>>>['//a[.="Chicken Madeira"]/../../../../..//span']