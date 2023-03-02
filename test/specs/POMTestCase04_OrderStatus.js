//login as user order a dish navigate to admin module update the order status, check whether its updated

import AdminHomePage from '../pageobjects/adminHome.page.js'
import AdminLoginPage from '../pageobjects/adminLogin.page.js'
import OrderUpdatePage from '../pageobjects/adminOrderUpdate.page.js'
import UserCheckoutPage from '../pageobjects/userCheckout.page.js'
import UserDishesPage from '../pageobjects/userDishes.page.js'
import UserHomePage from '../pageobjects/userHome.page.js'
import UserLoginPage from '../pageobjects/userLogin.page.js'
import ViewOrdersPage from '../pageobjects/adminViewOrders.page.js'
import UserRestaurantPage from '../pageobjects/userRestaurant.page.js'
import { expect } from 'chai'
describe('Update order status', async () => {
    let restaurantName='Jordania'
    let foodName = 'Biriyani'
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
    
    it('purchase the dish', async () => {       
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
        UserDishesPage.select_foodName=foodName
        let priceValue=await (await UserDishesPage.foodPrice).getText()
        UserDishesPage.set_priceValue=priceValue
        await browser.waitUntil(async()=>(( await (await UserDishesPage.CartPrice_bt).isDisplayed())))
        await (await UserDishesPage.Checkout_btn).click() 
        expect(await browser.getTitle()).to.contain("Checkout")
        await (await UserCheckoutPage.COD_radiobtn).click()        
        await (await UserCheckoutPage.Order_btn).click()
        await browser.waitUntil(async ()=> await browser.isAlertOpen())
        await browser.acceptAlert()
        await browser.waitUntil(async ()=> await browser.isAlertOpen())
        console.log(await browser.getAlertText())
        await browser.acceptAlert()
        expect(await browser.getTitle()).to.contain("My Orders")
     })

     it ('login as Admin', async () => {
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin")
       expect(await browser.getTitle()).to.contain("Admin Login") 
       await AdminLoginPage.Adminlogin('admin','codeastro')    
       await browser.waitUntil(async()=>{return await browser.getTitle()=="Admin Panel"},{timeouts:30000}) 
       expect(await browser.getTitle()).to.contain("Admin Panel")      
    })

    it ('update status',async() => {    
        await (await AdminHomePage.Orders_btn).click()
        expect(await browser.getTitle()).to.contain("All Orders")
        ViewOrdersPage.set_User=user
        ViewOrdersPage.set_foodName=foodName
        await (await ViewOrdersPage.edit_btn).click()
        expect(await browser.getTitle()).to.contain("View Order")
        await (await ViewOrdersPage.UpdateOrderStatus_btn).click()
        await browser.switchWindow('Order Update')
        expect(await browser.getTitle()).to.contain("Order Update")
        await (await OrderUpdatePage.Status_dd).selectByVisibleText('Delivered')
        await (await OrderUpdatePage.Remark_tf).setValue('Status updated to ------>  Delivered')
        await (await OrderUpdatePage.Submit_btn).click()
        await browser.acceptAlert()
        await (await OrderUpdatePage.Close_btn).click() 
        await browser.switchWindow('View Order')
        await browser.refresh()
        await browser.waitUntil(async()=>{return await browser.getTitle()=="View Order"},{timeouts:20000})    
        expect(await (await ViewOrdersPage.ViewStatus).getText()).to.contain('Delivered')

    })

})