class AllRestaurantPage{
    
    get restaurantList () {
        return $$('//tbody//td[2]');
    }
  
}

export default new AllRestaurantPage();