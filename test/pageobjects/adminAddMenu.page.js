import adminBasePage from "./adminBase.page.js";

class AddMenuPage extends adminBasePage
{
    
    get DishName_tf () {
        return $('input[name="d_name"]');
    }

    get Description_tf () {
        return $('input[name="about"]');
    }

    get Price_tf () {
        return $('input[name="price"]');
    }

    get RestaurantName_tf () {
        return $('select[name="res_name"]');
    }

    get DishImage_uploadFile () {
        return $('input[name="file"]');
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

    get menuHeader () {
        return $('//h4[.="Add Menu"]');
    }

    async addMenu (DishName,Description,Price,ImagePath,RestaurantName) {
        await this.DishName_tf.setValue(DishName);
        await this.Description_tf.setValue(Description);
        await this.Price_tf.setValue(Price);
        await this.DishImage_uploadFile.setValue(ImagePath);
        await (await this.RestaurantName_tf).selectByVisibleText(RestaurantName);
        await (await this.Save_btn).click()
        }

}
export default new AddMenuPage();