//login as user order a dish navigate to admin module update the order status

describe('Update order status', async () => {
    
    it('login as user', async () => {
       await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System")

       const Login = await browser.$('//a[.="Login"]')
        await Login.click()

       const username = await browser.$('input[name="username"]')
       await username.setValue('ajax')

       const password = await browser.$('input[name="password"]')
       await password.setValue('123aj456')
       
       const login = await browser.$('input[name="submit"]')
       await login.click()

       browser.waitUntil(async()=>(await browser.getTitle())==="Home")
    
       expect(browser).toHaveTitleContaining("Home")
    
    })
    

    it('purchase the dish', async () => {
        
        const Restaurants = await browser.$('//a[.="Restaurants "]')
        await Restaurants.click()
 
        const viewMenu = await browser.$('//a[.="Jordania"]/../../../following-sibling::div//a')
        await viewMenu.click()
        
        browser.waitUntil(async()=>{await (await browser.$('//h3[contains(.,"MENU ")]')).isElementDisplayed() })

        const addtoCart= await browser.$('//a[.="Biriyani"]/../../../../..//input[@type="submit"]')
        await addtoCart.click()
        
        const price= await browser.$('//a[.="Biriyani"]/../../../../..//span')
        let priceValue=await price.getText()

        browser.waitUntil(async()=>{await (await browser.$('//input[@value="'+priceValue+'"]')).isElementDisplayed()})

        const Checkout = await browser.$('//a[.="Checkout"]')
        await Checkout.click()
 
        const cod = await browser.$('//span[.="Cash on Delivery"]')
        await cod.click()
        
        const order= await browser.$('input[value="Order Now"]')
        await order.click()
        
        await browser.waitUntil(async ()=> await browser.isAlertOpen())
        await browser.acceptAlert()

        await browser.waitUntil(async ()=> await browser.isAlertOpen())
        await browser.acceptAlert()
     })

     it('login as Admin', async () => {

       await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin")

       const username = await browser.$('input[name="username"]')
       await username.setValue('admin')

       const password = await browser.$('input[name="password"]')
       await password.setValue('codeastro')
       
       const login = await browser.$('input[name="submit"]')
       await login.click()

       browser.waitUntil(async()=>(await browser.getTitle())==="Admin Panel")
    
       expect(browser).toHaveTitleContaining("Admin Panel")
    
    })

    it('update status',async() => {
        const orders = await browser.$('//a[.="Orders"]')
        await orders.click()

        const edit = await browser.$('//td[.="ajax"]/../td[.="Biriyani"]/..//a[contains(@href,"view")]')
        await edit.click()

        const update = await browser.$('//button[.="Update Order Status"]')
        await update.click()

        await browser.switchWindow('Order Update')

        const selectStatus = await browser.$('//select')
        await selectStatus.selectByVisibleText('On the way')

        const remark = await browser.$('//textarea')
        await remark.setValue('Status updated to ------>  on the way')

        const submit = await browser.$('input[name="update"]')
        await submit.click()

        await browser.acceptAlert()

        const close = await browser.$('input[name="Submit2"]')
        await close.click()
        
    })

})