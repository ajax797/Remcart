describe('Fetch table', async () => {

    it('Restuarant name in array', async () => {
        await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin")

       const username = await browser.$('input[name="username"]')
       await username.setValue('admin')

       const password = await browser.$('input[name="password"]')
       await password.setValue('codeastro')
       
       const login = await browser.$('input[name="submit"]')
       await login.click()

       browser.waitUntil(async()=>(await browser.getTitle())==="Admin Panel")
    
       const Restaurant = await browser.$('//span[.="Restaurant"]')
       await Restaurant.click()

       const allRestaurant = await browser.$('a*=All Restaurant')
        await allRestaurant.click()

        const resList = await browser.$$('//tbody//td[2]')

        let RestaurantList=await Promise.all(resList.map( async v=>await v.getText()))
        console.log(RestaurantList);

    
    })

})

