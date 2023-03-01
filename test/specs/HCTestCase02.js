//login as admin, add a dish to menu in perticular restaurant navigate to user module check whether the dish is displayed in te same restaurant

describe('Adding dish ', async () => {
    let rn=Math.trunc(Math.random()*1000)

    it('login as Admin', async () => {
       await browser.maximizeWindow()
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

    it('Adding a dish to menu',async () => {
        const menu = await browser.$('//span[.="Menu"]')
        await menu.click()

        const addmenu = await browser.$('//a[.="Add Menu"]')
        await addmenu.click()

        browser.waitUntil(async()=>{await (await browser.$('//h4[.="Add Menu"]')).isElementDisplayed() })

        const dishName = await browser.$('input[name="d_name"]')
        await dishName.setValue('Biriyani'+rn)

        const description = await browser.$('input[name="about"]')
        await description.setValue('Vegitarian')

        const price = await browser.$('input[name="price"]')
        await price.setValue('5')

        const dishImagePath=await browser.uploadFile('food1.jpg')
        const dishImage = await browser.$('input[name="file"]')
        await dishImage.setValue(dishImagePath)

        const resName = await browser.$('select[name="res_name"]')
        await resName.selectByVisibleText('Jordania')

        const save = await browser.$('input[name="submit"]')
        await save.click()

        const confirmMsg = await browser.$('//span[.="×"]/../..')
        expect(await confirmMsg.getText()).toContain('New Dish Added Successfully')
        console.log(await confirmMsg.getText());

    })

    it('Check whether dish is displayed ', async () => {
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