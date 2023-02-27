class AddCategoryPage{
    
    get inputCategoryName () {
        return $('input[name="c_name"]');
    }

    get btnSave () {
        return $('input[name="submit"]');
    }

    get CategoryTable () {
        return $('//tbody');
    }

    async addCategory (categoryName) {
        await this.inputCategoryName.setValue(categoryName);
        await this.btnSave.click();
    }   
}

export default new AddCategoryPage();