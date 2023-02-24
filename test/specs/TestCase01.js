//Login as Admin, add a Category, add a Restaurant in that category, Check whether the Restaurant is created in all restuarant module

describe('Adding restaurant ', async () => {
    let rn=Math.trunc(Math.random()*1000)

    it('login as Admin', async () => {
        await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin")

       const username = await browser.$('input[name="username"]')
       await username.setValue('admin')

       //await browser.debug()

       const password = await browser.$('input[name="password"]')
       await password.setValue('codeastro')
       
       const login = await browser.$('input[name="submit"]')
       await login.click()

       browser.waitUntil(async()=>(await browser.getTitle())==="Admin Panel")
    
       expect(browser).toHaveTitleContaining("Admin Panel")
    
    })

    it('Add category',async()=>{

        const Restaurant = await browser.$('//span[.="Restaurant"]')
        await Restaurant.click()

        const AddCategory = await browser.$('//a[.="Add Category"]')
        await AddCategory.click()
        
        const categoryName = await browser.$('input[name="c_name"]')
        await categoryName.setValue('Italian'+rn)

        const save = await browser.$('input[name="submit"]')
        await save.click()

        const CategoryTable = await browser.$('//tbody')
        await CategoryTable.waitForDisplayed({timeout:3000})

        const expCategory = await browser.$('//tbody//td[.="'+'Italian'+rn+'"]')
        expect(await expCategory.getText()).toContain('Italian'+rn)


    })


    it('Add Restaurant',async()=>{

        const AddRestaurant = await browser.$('//a[.="Add Restaurant"]')
        await AddRestaurant.click()
        
        const RestaurantName = await browser.$('input[name="res_name"]')
        await RestaurantName.setValue('Jordania'+rn)

        const bussinessEmail = await browser.$('input[name="email"]')
        await bussinessEmail.setValue('Jordania'+rn+'gmail.com')

        const phone = await browser.$('input[name="phone"]')
        await phone.setValue(Math.trunc(Math.random()*10000000000))

        const website = await browser.$('input[name="url"]')
        await website.setValue('www.jordania'+rn+'.com')

        const openHours = await browser.$('select[name="o_hr"]')
        await openHours.selectByVisibleText('9am')

        const closeHours = await browser.$('select[name="c_hr"]')
        await closeHours.selectByVisibleText('9pm')

        const opendays = await browser.$('select[name="o_days"]')
        await opendays.selectByVisibleText('24hr-x7')

        const resImagePath=await browser.uploadFile('res4.jpg')
        const resImage = await browser.$('input[name="file"]')
        await resImage.setValue(resImagePath)

        const categoryName = await browser.$('select[name="c_name"]')
        await categoryName.selectByVisibleText('Italian'+rn)

        const RestaurantAddress = await browser.$('textarea[name="address"]')
        await RestaurantAddress.setValue('Jordania'+rn+',Dubai Mall - Galeries Lafayette Le Gourmet  2nd Level, Galeries Lafayette, The Dubai Mall - Dubai - United Arab Emirates')
        
        const save = await browser.$('input[name="submit"]')
        await save.click()

        const confirmMsg = await browser.$('//span[.="×"]/../..')
        expect(await confirmMsg.getText()).toContain('New Restaurant Added Successfully')
        console.log(await confirmMsg.getText());

    })

    it('to check whether restaurant is added',async()=>{

        const allRestaurant = await browser.$('a*=All Restaurant')
        await allRestaurant.click()

        const resList = await browser.$$('//tbody//td[2]')

        let RestaurantList=await Promise.all(resList.map( async v=>await v.getText()))
        console.log(RestaurantList);

        // browser.waitUntil(RestaurantList.length==resList.length)
        // .then(()=>{RestaurantList.includes('Jordania'+rn)})
        // .then(()=>{console.log("found");})
        // .catch(()=>{console.log("not found");})


        // expect().toBeDisplayed()
        // console.log(await restaurantList);
        // let result=await browser.findElementFromElement(restaurantList,'Jordania'+rn)

        // //const restaurantList1 = await browser.$$('//tbody//td[2]')
        let res=RestaurantList.includes('Jordania'+rn)
        //console.log(res+'-------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------');

    })

    
})
















//Souk Al Bahar - Downtown Dubai - Dubai - United Arab Emirates
//Lobby Level, Address Downtown Sheikh Mohammed Bin Rashed Boulevard, Downtown Dubai, 123234 - Dubai - United Arab Emirates
//Dubai Mall - Galeries Lafayette Le Gourmet – 2nd Level, Galeries Lafayette, The Dubai Mall - Dubai - United Arab Emirates