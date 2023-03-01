import adminBasePage from "./adminBase.page.js";

class AllRestaurantPage extends adminBasePage
{
    
    get restaurantList_table () {
        return $$('//tbody//td[2]');
    }
  
}

export default new AllRestaurantPage();