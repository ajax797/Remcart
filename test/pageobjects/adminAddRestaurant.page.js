import adminBasePage from "./adminBase.page.js";

class AddRestaurantPage extends adminBasePage
{
    
    get RestaurantName_tf () {
        return $('input[name="res_name"]');
    }

    get BussinessEmail_tf () {
        return $('input[name="email"]');
    }

    get Phone_tf () {
        return $('input[name="phone"]');
    }

    get Website_tf () {
        return $('input[name="url"]');
    }

    get OpenHours_dd () {
        return $('select[name="o_hr"]');
    }

    get CloseHours_dd () {
        return $('select[name="c_hr"]');
    }

    get Opendays_dd () {
        return $('select[name="o_days"]');
    }

    get RestaurantImage_fileUpload () {
        return $('input[name="file"]');
    }

    get CategoryName_dd () {
        return $('select[name="c_name"]');
    }
    
    get RestaurantAddress_tf () {
        return $('textarea[name="address"]');
    }

    get Save_btn () {
        return $('input[name="submit"]');
    }

    get Cancel_btn () {
        return $('//a[contains(.,"Cancel")]');
    }

    get confirm_Msg () {
        return $('//span[.="×"]/../..');
    }

    async addRestaurant (RestaurantName,BussinessEmail,Phone,Website,OpenHours,CloseHours,Opendays,ImagePath,CategoryName,RestaurantAddress) {
        await this.RestaurantName_tf.setValue(RestaurantName);
        await this.BussinessEmail_tf.setValue(BussinessEmail);
        await this.Phone_tf.setValue(Phone);
        await this.Website_tf.setValue(Website);
        await this.OpenHours_dd.selectByVisibleText(OpenHours);
        await this.CloseHours_dd.selectByVisibleText(CloseHours);
        await this.Opendays_dd.selectByVisibleText(Opendays);
        await this.RestaurantImage_fileUpload.setValue(ImagePath);
        await this.CategoryName_dd.selectByVisibleText(CategoryName);
        await this.RestaurantAddress_tf.setValue(RestaurantAddress);
        await (await this.Save_btn).click()
        }

}
export default new AddRestaurantPage();