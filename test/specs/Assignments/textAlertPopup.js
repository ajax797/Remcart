describe('text from alert', async () => {
    it('added to cart message', async () => {
       await browser.maximizeWindow()
       await browser.url("https://testingserver/domain/Online_Shopping_Application")

       const loginbtn = await browser.$('//a[.="Login"]')
       await loginbtn.click()

       const username = await browser.$('input[name="email"]')
       await username.setValue('anuj.lpu1@gmail.com')

       const password = await browser.$('input[name="password"]')
       await password.setValue('Test@123')
       
       const login = await browser.$('button[name="login"]')
       await login.click()

    const search = await browser.$('//input')
    await search.setValue('mi')

    const searchBtn = await browser.$('//button[@name="search"]')
    await searchBtn.click()

    const addtoCart = await browser.$('//button[.="Add to cart"]')
    await addtoCart.click()

    await browser.pause(3000)

    await browser.waitUntil(async ()=> await browser.isAlertOpen())
    console.log(await browser.getAlertText())
    await browser.acceptAlert()
    
    await browser.pause(3000)

    })
})