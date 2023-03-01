export default class AdminBasePage{
    
    get Dashboard_btn () {
        return $('//span[.="Dashboard"]');
    }

    get Users_btn () {
        return $('//span[.="Users"]');
    }

    get Restaurant_btn () {
        return $('//span[.="Restaurant"]');
    }

    get AddCategory_btn () {
        return $('//a[.="Add Category"]');
    }

    get AddRestaurant_btn () {
        return $('//a[.="Add Restaurant"]');
    }

    get AllRestaurant_btn () {
        return $('a*=All Restaurant');
    }

    get Menu_btn () {
        return $('//span[.="Menu"]');
    }

    get AddMenu_btn () {
        return $('//a[.="Add Menu"]');
    }

    get Orders_btn () {
        return $('//a[.="Orders"]');
    }
}


