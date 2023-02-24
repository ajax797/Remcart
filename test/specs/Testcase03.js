//login as user, click on restaurants, add a dish to cart, purchace via cash on delivery, check whether the order is placed

describe('order dish', async () => {
    
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
    

    it('add a dish to cart', async () => {
        
        const Restaurants = await browser.$('//a[.="Restaurants "]')
        await Restaurants.click()
 
        const viewMenu = await browser.$('//a[.="Jordania"]/../../../following-sibling::div//a')
        await viewMenu.click()
        
        browser.waitUntil(async()=>{await (await browser.$('//h3[contains(.,"MENU ")]')).isElementDisplayed() })

        const addtoCart= await browser.$('//a[.="Biriyani"]/../../../../..//input[@type="submit"]')
        await addtoCart.click()
     })

     it('purchase the dish', async () => {
        
      //  const price= await browser.$('//a[.="Biriyani"]/../../../../..//span')
      //   let priceValue=await price.getText()

      //   browser.waitUntil(async()=>{return await (await browser.$(`//input[contains(@value,"${priceValue}")]`)).waitForDisplayed()},{timeouts:10000})

        const Checkout = await browser.$('//a[.="Checkout"]')
        await Checkout.click()
 
        const cod = await browser.$('//span[.="Cash on Delivery"]')
        await cod.click()
        
        const order= await browser.$('input[value="Order Now"]')
        await order.click()
        
        await browser.waitUntil(async ()=> await browser.isAlertOpen())
        await browser.acceptAlert()

        await browser.waitUntil(async ()=> await browser.isAlertOpen())
        console.log(await browser.getAlertText())
        await browser.acceptAlert()
     })

})