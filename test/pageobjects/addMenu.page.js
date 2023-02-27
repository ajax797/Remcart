class AddMenuPage{
    
    get inputDishName () {
        return $('input[name="d_name"]');
    }

    get inputDescription () {
        return $('input[name="about"]');
    }

    get inputPrice () {
        return $('input[name="price"]');
    }

    get inputRestaurantName () {
        return $('select[name="res_name"]');
    }

    get uploadDishImage () {
        return $('input[name="file"]');
    }

    get btnSave () {
        return $('input[name="submit"]');
    }

    get confirmMsg () {
        return $('//span[.="×"]/../..');
    }

    get menuHeader () {
        return $('//h4[.="Add Menu"]');
    }

    async addMenu (DishName,Description,Price,ImagePath,RestaurantName) {
        await this.inputDishName.setValue(DishName);
        await this.inputDescription.setValue(Description);
        await this.inputPrice.setValue(Price);
        await this.uploadDishImage.setValue(ImagePath);
        await (await this.inputRestaurantName).selectByVisibleText(RestaurantName);
        await (await this.btnSave).click()
        }

}
export default new AddMenuPage();