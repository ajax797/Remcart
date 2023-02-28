class UserDishesPage{
    
    get menuHeader () {
        return $('//h3[contains(.,"MENU ")]');
    }

    get btnCheckout () {
        return $('//a[.="Checkout"]');
    }
    

}

export default new UserDishesPage();
