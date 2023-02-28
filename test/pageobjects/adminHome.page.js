class AdminHomePage{
    
    get btnRestaurant () {
        return $('//span[.="Restaurant"]');
    }

    get btnAddCategory () {
        return $('//a[.="Add Category"]');
    }

    get btnAddRestaurant () {
        return $('//a[.="Add Restaurant"]');
    }

    get btnAllRestaurant () {
        return $('a*=All Restaurant');
    }

    get btnMenu () {
        return $('//span[.="Menu"]');
    }

    get btnAddMenu () {
        return $('//a[.="Add Menu"]');
    }

    get btnOrders () {
        return $('//a[.="Orders"]');
    }



}

export default new AdminHomePage();
