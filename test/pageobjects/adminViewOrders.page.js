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

}

export default new ViewOrdersPage();
