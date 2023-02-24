describe('order dish', async () => {
    
    it('login as user', async () => {
       await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System")

       const Login = await browser.$('//a[.="Login"]')
        await Login.click()

       const username = await browser.$('input[name="username"]')
       await username.setValue('ajax')

       const password = await browser.$('input[name="password"]')
       await password.setValue('123aj45')
       
       const login = await browser.$('input[name="submit"]')
       await login.click()

       const errorMsg = await browser.$('//span[@style="color:red;"]')

       browser.waitUntil(async()=>(await errorMsg.getText()!=null))
       console.log("ERROR MESSAGE =====> "+await errorMsg.getText());
    
    })
})