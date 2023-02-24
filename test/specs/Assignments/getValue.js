describe('get value', async () => {
    
    it('get value', async () => {
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
     
        const Restaurants = await browser.$('//a[.="Restaurants "]')
        await Restaurants.click()
 
        const viewMenu = await browser.$('//a[.="Jordania"]/../../../following-sibling::div//a')
        await viewMenu.click()
        
        const addtoCart= await browser.$('//a[.="Biriyani"]/../../../../..//input[@type="submit"]')
        await addtoCart.click()
       
        const price= await browser.$('//a[.="Biriyani"]/../../../../..//span')
        let priceValue=await price.getText()
        console.log('========================='+priceValue);
        const cartPrice=await browser.$(`//input[@id="exampleSelect1"]`)

        browser.waitUntil(async()=>{return await (cartPrice).waitForDisplayed()},{timeouts:10000})

        const cartpricev=cartPrice.getValue()
        console.log('============================'+cartpricev);
        if (priceValue==cartpricev) 
        {
            const Checkout = await browser.$('//a[.="Checkout"]')
            await Checkout.click()
            console.log("orderder successfull");
            await browser.pause(4000)
        }
        else
        {
            console.log("order failed");
        }
        await browser.pause(4000) 
    })
})