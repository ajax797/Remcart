import UserBasePage from "./userBase.page.js";

class UserRestaurantPage extends UserBasePage
{
    restaurantName=''
    get viewMenu_btn () 
    {
        return $(`//a[.="${this.restaurantName}"]/../../../following-sibling::div//a`);
    }

    set select_RestaurantName(restaurantName)
    {
        this.restaurantName=restaurantName
    }
    
}

export default new UserRestaurantPage();
