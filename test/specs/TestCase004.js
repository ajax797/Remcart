//login as user order a dish navigate to admin module update the order status

import AdminHomePage from '../pageobjects/adminHome.page.js'
import AdminLoginPage from '../pageobjects/adminLogin.page.js'
import OrderUpdatePage from '../pageobjects/orderUpdate.page.js'
import UserCheckoutPage from '../pageobjects/userCheckout.page.js'
import UserDishesPage from '../pageobjects/userDishes.page.js'
import UserHomePage from '../pageobjects/userHome.page.js'
import UserLoginPage from '../pageobjects/userLogin.page.js'
import ViewOrdersPage from '../pageobjects/viewOrders.page.js'

describe('Update order status', async () => {
    let restaurantName='Jordania'
    let foodName = 'Biriyani'
    let user='ajax'
    it('login as user', async () => {
       await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System")
       await (await UserHomePage.linkLogin).click()
       await UserLoginPage.Userlogin(user,'123aj456')
       await browser.waitUntil(async()=>(await browser.getTitle())==="Home")    
       expect(browser).toHaveTitleContaining("Home")    
    })
    
    it('purchase the dish', async () => {       
        await (await UserHomePage.linkRestaurants).click() 
        const viewMenu = await browser.$(`'//a[.="${restaurantName}"]/../../../following-sibling::div//a`)
        await viewMenu.click()        
        await browser.waitUntil(async()=>(await (await UserDishesPage.menuHeader).isDisplayed()))        
        const addtoCart= await browser.$(`//a[.="${foodName}"]/../../../../..//input[@type="submit"]`)
        await addtoCart.click()
        const price= await browser.$(`//a[.="${foodName}"]/../../../../..//span`)
        let priceValue=await price.getText()
        await browser.waitUntil(async()=>(( await (await browser.$(`//input[contains(@value,"${priceValue}")]`)).isDisplayed())))
        await (await UserDishesPage.btnCheckout).click() 
        await (await UserCheckoutPage.radioCOD).click()        
        await (await UserCheckoutPage.btnOrder).click()
        await browser.waitUntil(async ()=> await browser.isAlertOpen())
        await browser.acceptAlert()
        await browser.waitUntil(async ()=> await browser.isAlertOpen())
        console.log(await browser.getAlertText())
        await browser.acceptAlert()
     })

     it('login as Admin', async () => {
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin")
       AdminLoginPage.Adminlogin('admin','codeastro')    
       await browser.waitUntil(async()=>(await browser.getTitle())==="Admin Panel")    
       expect(browser).toHaveTitleContaining("Admin Panel")       
    })

    it('update status',async() => {    
        await (await AdminHomePage.btnOrders).click()
        const edit = await browser.$('//td[.="'+user+'"]/../td[.="'+foodName+'"]/..//a[contains(@href,"view")]')
        await edit.click()
        await (await ViewOrdersPage.btnUpdateOrderStatus).click()
        await browser.switchWindow('Order Update')
        await (await OrderUpdatePage.selectStatus).selectByVisibleText('On the way')
        await (await OrderUpdatePage.inputRemark).setValue('Status updated to ------>  on the way')
        await (await OrderUpdatePage.btnSubmit).click()
        await browser.acceptAlert()
        await (await OrderUpdatePage.btnClose).click()       
    })

})