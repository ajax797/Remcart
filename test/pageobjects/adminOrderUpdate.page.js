class OrderUpdatePage{
    
    get Status_dd () {
        return $('//select');
    }

    get Remark_tf () {
        return $('//textarea');
    }

    get Submit_btn () {
        return $('input[name="update"]');
    }

    get Close_btn () {
        return $('input[name="Submit2"]');
    }

}

export default new OrderUpdatePage();