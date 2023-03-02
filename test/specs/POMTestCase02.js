//login as admin, add a dish to menu in perticular restaurant navigate to user module check whether the dish is displayed in te same restaurant

import AdminLoginPage from '../pageobjects/adminLogin.page.js'
import AdminHomePage from '../pageobjects/adminHome.page.js'
import AddMenuPage from '../pageobjects/adminAddMenu.page.js'
import UserHomePage from '../pageobjects/userHome.page.js'
import UserDishesPage from '../pageobjects/userDishes.page.js'
import UserRestaurantPage from '../pageobjects/userRestaurant.page.js'

describe('Adding dish ', async () => {
    let rn=Math.trunc(Math.random()*1000)
    let dishName='Biriyani'+rn

    it('login as Admin', async () => {
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin")
        expect(browser).toHaveTitleContaining("Admin Login")
        await AdminLoginPage.Adminlogin('admin','codeastro')
        await browser.waitUntil(async()=>(await browser.getTitle())==="Admin Panel")
        expect(browser).toHaveTitleContaining("Admin Panel")
     })

    it('Adding a dish to menu',async () => {
        await AdminHomePage.Menu_btn.click()
        await AdminHomePage.AddMenu_btn.click() 
        await browser.waitUntil(async()=>(await (await AddMenuPage.menuHeader).isDisplayed()))
        expect(browser).toHaveTitleContaining("Add Menu")
        const dishImagePath=await browser.uploadFile('food1.jpg')
        await AddMenuPage.addMenu(dishName,'Vegitarian','5',dishImagePath,'Jordania')
        expect(await (await AddMenuPage.confirm_Msg).getText()).toContain('New Dish Added Successfully')
        console.log(await AddMenuPage.confirm_Msg.getText());
    })

    it ('Check whether dish is displayed ', async () => {
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System")
        expect(browser).toHaveTitleContaining("Home")
        await UserHomePage.Restaurants_link.click()
        expect(browser).toHaveTitleContaining("Restaurants")
        let restaurantName='Jordania'
        UserRestaurantPage.select_RestaurantName=restaurantName
        await (await UserRestaurantPage.viewMenu_btn).click()      
        browser.waitUntil(async()=>(await (await UserDishesPage.menuHeader).isDisplayed()))  
        expect(browser).toHaveTitleContaining("Dishes")  
        expect(await (await UserDishesPage.Restaurants_Title).getText()).toContain(restaurantName)     
        UserDishesPage.select_foodName=dishName
        expect(await (await UserDishesPage.DishName).getText()).toContain(dishName)
     })

})