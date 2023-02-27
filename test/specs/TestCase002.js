//login as admin, add a dish to menu in perticular restaurant navigate to user module check whether the dish is displayed in te same restaurant

import AdminLoginPage from '../pageobjects/adminLogin.page.js'
import AdminHomePage from '../pageobjects/adminHome.page.js'
import AddMenuPage from '../pageobjects/addMenu.page.js'

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

        const confirmMsg = await browser.$('//span[.="×"]/../..')
        expect(await (await AddMenuPage.confirmMsg).getText()).toContain('New Dish Added Successfully')
        console.log(await confirmMsg.getText());

    })

    it.skip('Check whether dish is displayed ', async () => {
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System")
 
        const Restaurants = await browser.$('//a[.="Restaurants "]')
        await Restaurants.click()
 
        const viewMenu = await browser.$('//a[.="Jordania"]/../../../following-sibling::div//a')
        await viewMenu.click()
        
        browser.waitUntil(async()=>{await (await browser.$('//h3[contains(.,"MENU ")]')).isElementDisplayed() })

        const dishName= await browser.$('//a[.="Biriyani'+rn+'"]')
        expect(await dishName.getText()).toContain('Biriyani'+rn)
     })

})