//login as user, click on restaurants, add a dish to cart, purchace via cash on delivery, check whether the order is placed

import UserCheckoutPage from '../pageobjects/userCheckout.page.js'
import UserDishesPage from '../pageobjects/userDishes.page.js'
import UserHomePage from '../pageobjects/userHome.page.js'
import UserLoginPage from '../pageobjects/userLogin.page.js'
import UserRestaurantPage from '../pageobjects/userRestaurant.page.js' 
import { expect } from 'chai'
describe('order dish', async () => {
    let restaurantName='Jordania'
    let foodName = 'Biriyani'
    let quantity = '1'
    let user='ajax'
    it('login as user', async () => {
      await browser.maximizeWindow()
      await browser.url("http://testingserver/domain/Online_Food_Ordering_System")
      expect(await browser.getTitle()).to.contain("Home")
      await (await UserHomePage.Login_link).click()
      expect(await browser.getTitle()).to.contain("Login")
      await UserLoginPage.Userlogin(user,'123aj456')
      await browser.waitUntil(async()=>(await browser.getTitle())==="Home")  
      expect(await browser.getTitle()).to.contain("Home") 
    })
    
    it ('add a dish to cart', async () => {    
        await (await UserHomePage.Restaurants_link).click() 
        expect(await browser.getTitle()).to.contain("Restaurants")
        UserRestaurantPage.select_RestaurantName=restaurantName
        await (await UserRestaurantPage.viewMenu_btn).click()
        expect(await browser.getTitle()).to.contain("Dishes")       
        await browser.waitUntil(async()=>(await (await UserDishesPage.menuHeader).isDisplayed()))
        UserDishesPage.set_RestaurantsName=restaurantName
        expect(await (await UserDishesPage.Restaurants_Title).getText()).to.contain(restaurantName) 
        UserDishesPage.select_foodName=foodName
        await (await UserDishesPage.addToCart_btn).click()    
     })

     it ('purchase the dish', async () => {       
        UserDishesPage.select_foodName=foodName
        let dishPrice=await (await UserDishesPage.foodPrice).getText()
        UserDishesPage.set_priceValue=dishPrice
        await browser.waitUntil(async()=>(( await (await UserDishesPage.CartPrice_bt).isDisplayed())))
        expect(await UserDishesPage.CartPrice_bt.getValue()==dishPrice).to.be.true
        expect(await UserDishesPage.foodInCart.getText()==foodName)
        expect(await UserDishesPage.CartQuantity.getValue()==quantity)
        await (await UserDishesPage.Checkout_btn).click() 
        expect(await browser.getTitle()).to.contain("Checkout")
        await (await UserCheckoutPage.COD_radiobtn).click()        
        await (await UserCheckoutPage.Order_btn).click()
        //await browser.waitUntil(async ()=> await browser.isAlertOpen())
        await browser.acceptAlert()
      //   await browser.waitUntil(async ()=> await browser.isAlertOpen())
        console.log(await browser.getAlertText())
        await browser.acceptAlert()
        //expect(await browser.getTitle()).to.contain("My Orders")
     })

})