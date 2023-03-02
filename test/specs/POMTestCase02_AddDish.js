//login as admin, add a dish to menu in perticular restaurant navigate to user module check whether the dish is displayed in the same restaurant

import AdminLoginPage from '../pageobjects/adminLogin.page.js'
import AdminHomePage from '../pageobjects/adminHome.page.js'
import AddMenuPage from '../pageobjects/adminAddMenu.page.js'
import UserHomePage from '../pageobjects/userHome.page.js'
import UserDishesPage from '../pageobjects/userDishes.page.js'
import UserRestaurantPage from '../pageobjects/userRestaurant.page.js'
import { expect } from 'chai'
describe('Adding dish ', async () => {
    let rn=Math.trunc(Math.random()*1000)
    let restaurantName='Jordania'
    let dishName='Biriyani'+rn

    it('login as Admin', async () => {
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin")
        expect(await browser.getTitle()).to.contain("Admin Login")
        await AdminLoginPage.Adminlogin('admin','codeastro')
        await browser.waitUntil(async()=>(await browser.getTitle())==="Admin Panel")
        expect(await browser.getTitle()).to.contain("Admin Panel")
     })

    it('Adding a dish to menu',async () => {
        await AdminHomePage.Menu_btn.click()
        await AdminHomePage.AddMenu_btn.click() 
        await browser.waitUntil(async()=>(await (await AddMenuPage.menuHeader).isDisplayed()))
        expect(await browser.getTitle()).to.contain("Add Menu")
        const dishImagePath=await browser.uploadFile('food1.jpg')
        await AddMenuPage.addMenu(dishName,'Vegitarian','5',dishImagePath,'Jordania')
        expect(await (await AddMenuPage.confirm_Msg).getText()).to.contain('New Dish Added Successfully')
        console.log(await AddMenuPage.confirm_Msg.getText());
    })

    it ('Check whether dish is displayed ', async () => {
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System")
        expect(await browser.getTitle()).to.contain("Home")
        await UserHomePage.Restaurants_link.click()
        expect(await browser.getTitle()).to.contain("Restaurants")
        UserRestaurantPage.select_RestaurantName=restaurantName
        await (await UserRestaurantPage.viewMenu_btn).click()      
        browser.waitUntil(async()=>(await (await UserDishesPage.menuHeader).isDisplayed()))  
        expect(await browser.getTitle()).to.contain("Dishes")  
        UserDishesPage.set_RestaurantsName=restaurantName
        expect(await (await UserDishesPage.Restaurants_Title).getText()).to.contain(restaurantName)     
        UserDishesPage.select_foodName=dishName
        expect(await (await UserDishesPage.DishName).getText()).to.contain(dishName)
     })

})