class AdminHomePage{
    
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

    get Profile_img () {
        return $('//img[@class="profile-pic"]/..');
    }

    get Logout_btn () {
        return $('//a[contains(.," Logout")]');
    }

    async Adminlogout () {
        await (await this.Profile_img).click()
        await this.Logout_btn.click();
    }


}

export default new AdminHomePage();
