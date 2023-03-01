import adminBasePage from "./adminBase.page.js";

class AddCategoryPage extends adminBasePage
{
    
    get CategoryName_tf () {
        return $('input[name="c_name"]');
    }

    get Save_btn () {
        return $('input[name="submit"]');
    }

    get Cancel_btn () {
        return $('//a[contains(.,"Cancel")]');
    }

    get Category_Table () {
        return $('//tbody');
    }

    async addCategory (categoryName) {
        await this.CategoryName_tf.setValue(categoryName);
        await this.Save_btn.click();
    }   
}

export default new AddCategoryPage();