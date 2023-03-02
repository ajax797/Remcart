import adminBasePage from "./adminBase.page.js";

class ViewOrdersPage extends adminBasePage
{
    
    get UpdateOrderStatus_btn () {
        return $('//button[.="Update Order Status"]');
    }

    get ViewUserDetials_btn () {
        return $('//button[.="View User Detials"]');
    }

    get ViewStatus () {
        return $('//strong[.="Status:"]/../..//button');
    }

    foodName=''
    User=''
    get edit_btn () 
    {
        return $(`//td[.="${this.User}"]/../td[.="${this.foodName}"]/..//a[contains(@href,"view")]`);
    }
    set set_foodName(foodName)
    {
        this.foodName=foodName
    }
    set set_User(User)
    {
        this.User=User
    }

}

export default new ViewOrdersPage();
