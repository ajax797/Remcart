//login as user order a dish navigate to admin module update the order status

import AdminHomePage from '../pageobjects/adminHome.page.js'
import AdminLoginPage from '../pageobjects/adminLogin.page.js'
import OrderUpdatePage from '../pageobjects/adminOrderUpdate.page.js'
import UserCheckoutPage from '../pageobjects/userCheckout.page.js'
import UserDishesPage from '../pageobjects/userDishes.page.js'
import UserHomePage from '../pageobjects/userHome.page.js'
import UserLoginPage from '../pageobjects/userLogin.page.js'
import ViewOrdersPage from '../pageobjects/adminViewOrders.page.js'
import UserRestaurantPage from '../pageobjects/userRestaurant.page.js'

describe('Update order status', async () => {
    let restaurantName='Jordania'
    let foodName = 'Biriyani'
    let user='ajax'
    it('login as user', async () => {
       await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System")
       expect(browser).toHaveTitleContaining("Home")
       await (await UserHomePage.Login_link).click()
       expect(browser).toHaveTitleContaining("Login")
       await UserLoginPage.Userlogin(user,'123aj456')
       await browser.waitUntil(async()=>(await browser.getTitle())==="Home")    
       expect(browser).toHaveTitleContaining("Home")    
    })
    
    it('purchase the dish', async () => {       
        await (await UserHomePage.Restaurants_link).click() 
        expect(browser).toHaveTitleContaining("Restaurants")
        UserRestaurantPage.select_RestaurantName=restaurantName
        await (await UserRestaurantPage.viewMenu_btn).click()
        expect(browser).toHaveTitleContaining("Dishes")       
        await browser.waitUntil(async()=>(await (await UserDishesPage.menuHeader).isDisplayed()))
        expect(await (await UserDishesPage.Restaurants_Title).getText()).toContain(restaurantName) 
        UserDishesPage.select_foodName=foodName
        await (await UserDishesPage.addToCart_btn).click()
        UserDishesPage.select_foodName=foodName
        let priceValue=await (await UserDishesPage.foodPrice).getText()
        UserDishesPage.set_priceValue=priceValue
        await browser.waitUntil(async()=>(( await (await UserDishesPage.CartPrice_bt).isDisplayed())))
        await (await UserDishesPage.Checkout_btn).click() 
        expect(browser).toHaveTitleContaining("Checkout")
        await (await UserCheckoutPage.COD_radiobtn).click()        
        await (await UserCheckoutPage.Order_btn).click()
        await browser.waitUntil(async ()=> await browser.isAlertOpen())
        await browser.acceptAlert()
        await browser.waitUntil(async ()=> await browser.isAlertOpen())
        console.log(await browser.getAlertText())
        await browser.acceptAlert()
        expect(browser).toHaveTitleContaining("My Orders")
     })

     it ('login as Admin', async () => {
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin")
       expect(browser).toHaveTitleContaining("Admin Login") 
       await AdminLoginPage.Adminlogin('admin','codeastro')    
       await browser.waitUntil(async()=>{return await browser.getTitle()=="Admin Panel"},{timeouts:30000})    
       expect(browser).toHaveTitleContaining("Admin Panel")       
    })

    it ('update status',async() => {    
        await (await AdminHomePage.Orders_btn).click()
        expect(browser).toHaveTitleContaining("All Orders")
        const edit = await browser.$('//td[.="'+user+'"]/../td[.="'+foodName+'"]/..//a[contains(@href,"view")]')
        await edit.click()
        expect(browser).toHaveTitleContaining("View Order")
        await (await ViewOrdersPage.UpdateOrderStatus_btn).click()
        await browser.switchWindow('Order Update')
        expect(browser).toHaveTitleContaining("Order Update")
        await (await OrderUpdatePage.Status_dd).selectByVisibleText('Delivered')
        await (await OrderUpdatePage.Remark_tf).setValue('Status updated to ------>  Delivered')
        await (await OrderUpdatePage.Submit_btn).click()
        await browser.acceptAlert()
        await (await OrderUpdatePage.Close_btn).click() 
        await browser.switchWindow('View Order')
        await browser.refresh()
        await browser.waitUntil(async()=>{return await browser.getTitle()=="View Order"},{timeouts:20000})    
        expect(await (await ViewOrdersPage.ViewStatus).getText()).toContain('Delivered')

    })

})