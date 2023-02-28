class OrderUpdatePage{
    
    get selectStatus () {
        return $('//select');
    }

    get inputRemark () {
        return $('//textarea');
    }

    get btnSubmit () {
        return $('input[name="update"]');
    }

    get btnClose () {
        return $('input[name="Submit2"]');
    }

}

export default new OrderUpdatePage();