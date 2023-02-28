//login as admin, add a dish to menu in perticular restaurant navigate to user module check whether the dish is displayed in te same restaurant

import AdminLoginPage from '../pageobjects/adminLogin.page.js'
import AdminHomePage from '../pageobjects/adminHome.page.js'
import AddMenuPage from '../pageobjects/addMenu.page.js'
import UserHomePage from '../pageobjects/userHome.page.js'
import UserDishesPage from '../pageobjects/userDishes.page.js'

describe('Adding dish ', async () => {
    let rn=Math.trunc(Math.random()*1000)

    it('login as Admin', async () => {
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin")
        AdminLoginPage.Adminlogin('admin','codeastro')
        await browser.waitUntil(async()=>(await browser.getTitle())==="Admin Panel")
        expect(browser).toHaveTitleContaining("Admin Panel")
     })

    it('Adding a dish to menu',async () => {
        await AdminHomePage.btnMenu.click()
        await AdminHomePage.btnAddMenu.click() 
        await browser.waitUntil(async()=>(await (await AddMenuPage.menuHeader).isDisplayed()))
        const dishImagePath=await browser.uploadFile('food1.jpg')
        AddMenuPage.addMenu('Biriyani'+rn,'Vegitarian','5',dishImagePath,'Jordania')
        expect(await (await AddMenuPage.confirmMsg).getText()).toContain('New Dish Added Successfully')
        console.log(await confirmMsg.getText());
    })

    it ('Check whether dish is displayed ', async () => {
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System")
        await UserHomePage.linkRestaurants.click()
        let restaurantName='Jordania'
        const viewMenu = await browser.$('//a[.="'+restaurantName+'"]/../../../following-sibling::div//a')
        await viewMenu.click()       
        browser.waitUntil(async()=>(await (await UserDishesPage.menuHeader).isDisplayed()))       
        const dishName= await browser.$('//a[.="Biriyani'+rn+'"]')
        expect(await dishName.getText()).toContain('Biriyani'+rn)
     })

})