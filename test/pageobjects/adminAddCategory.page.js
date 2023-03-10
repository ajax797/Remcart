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

    async addCategory (catName) {
        await this.CategoryName_tf.setValue(catName);
        await(await this.Save_btn).click();
    }   
    CatName=''
    set select_Category(CatName)
    {
        this.CatName=CatName
    }

    get expCategoryName()
    {
        return $('//tbody//td[.="'+this.CatName+'"]');
    }


}

export default new AddCategoryPage();