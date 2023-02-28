class ViewOrdersPage{
    
    get btnUpdateOrderStatus () {
        return $('//button[.="Update Order Status"]');
    }

    get btnViewUserDetials () {
        return $('//button[.="View User Detials"]');
    }

}

export default new ViewOrdersPage();
