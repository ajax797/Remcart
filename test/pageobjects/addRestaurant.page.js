class AddRestaurantPage{
    
    get inputRestaurantName () {
        return $('input[name="res_name"]');
    }

    get inputBussinessEmail () {
        return $('input[name="email"]');
    }

    get inputPhone () {
        return $('input[name="phone"]');
    }

    get inputWebsite () {
        return $('input[name="url"]');
    }

    get selectOpenHours () {
        return $('select[name="o_hr"]');
    }

    get selectCloseHours () {
        return $('select[name="c_hr"]');
    }

    get selectOpendays () {
        return $('select[name="o_days"]');
    }

    get uploadRestaurantImage () {
        return $('input[name="file"]');
    }

    get selectCategoryName () {
        return $('select[name="c_name"]');
    }
    
    get inputRestaurantAddress () {
        return $('textarea[name="address"]');
    }

    get btnSave () {
        return $('input[name="submit"]');
    }

    get confirmMsg () {
        return $('//span[.="×"]/../..');
    }

    async addRestaurant (RestaurantName,BussinessEmail,Phone,Website,OpenHours,CloseHours,Opendays,ImagePath,CategoryName,RestaurantAddress) {
        await this.inputRestaurantName.setValue(RestaurantName);
        await this.inputBussinessEmail.setValue(BussinessEmail);
        await this.inputPhone.setValue(Phone);
        await this.inputWebsite.setValue(Website);
        await this.selectOpenHours.selectByVisibleText(OpenHours);
        await this.selectCloseHours.selectByVisibleText(CloseHours);
        await this.selectOpendays.selectByVisibleText(Opendays);
        await this.uploadRestaurantImage.setValue(ImagePath);
        await this.selectCategoryName.selectByVisibleText(CategoryName);
        await this.inputRestaurantAddress.setValue(RestaurantAddress);
        await (await this.btnSave).click()
        }

}
export default new AddRestaurantPage();