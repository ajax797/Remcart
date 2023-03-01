//login as user, click on restaurants, add a dish to cart, purchace via cash on delivery, check whether the order is placed

import UserCheckoutPage from '../pageobjects/userCheckout.page.js'
import UserDishesPage from '../pageobjects/userDishes.page.js'
import UserHomePage from '../pageobjects/userHome.page.js'
import UserLoginPage from '../pageobjects/userLogin.page.js'

describe('order dish', async () => {
    let restaurantName='Jordania'
    let foodName = 'Biriyani'
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
    
    it('add a dish to cart', async () => {    
        await (await UserHomePage.Restaurants_link).click() 
        expect(browser).toHaveTitleContaining("Restaurants")
        const viewMenu = await browser.$(`//a[.="${restaurantName}"]/../../../following-sibling::div//a`)
        await viewMenu.click() 
        expect(browser).toHaveTitleContaining("Dishes")       
        await browser.waitUntil(async()=>(await (await UserDishesPage.menuHeader).isDisplayed()))
        expect(await (await UserDishesPage.Restaurants_Title).getText()).toContain(restaurantName)       
        const addtoCart= await browser.$(`//a[.="${foodName}"]/../../../../..//input[@type="submit"]`)
        await addtoCart.click()
     })

     it ('purchase the dish', async () => {       
        const price= await browser.$(`//a[.="${foodName}"]/../../../../..//span`)
        let priceValue=await price.getText()
        await browser.waitUntil(async()=>(( await (await browser.$(`//input[contains(@value,"${priceValue}")]`)).isDisplayed())))
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

})