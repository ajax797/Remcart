//Login as Admin, add a Category, add a Restaurant in that category, Check whether the Restaurant is created in all restuarant module

//var adminLoginPage = require('./adminLogin.page.js');
import AdminLoginPage from '../pageobjects/adminLogin.page.js'
import AdminHomePage from '../pageobjects/adminHome.page.js'
import AddCategoryPage from '../pageobjects/addCategory.page.js'
import AddResaurantPage from '../pageobjects/addRestaurant.page.js'
import AllRestaurantPage from '../pageobjects/allRestaurant.page.js'

describe('Adding restaurant ', async () => {
    let rn=Math.trunc(Math.random()*1000)

    it('login as Admin', async () => {
       await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin")

       AdminLoginPage.Adminlogin('admin','codeastro')
    
       await browser.waitUntil(async()=>(await browser.getTitle())==="Admin Panel")
    
       expect(browser).toHaveTitleContaining("Admin Panel")
    
    })

    it('Add category',async()=>{

        await AdminHomePage.btnRestaurant.click()
        await AdminHomePage.btnAddCategory.click()
        AddCategoryPage.addCategory('Italian'+rn)

        await AddCategoryPage.CategoryTable.waitForDisplayed({timeout:3000})

        const expCategory = await browser.$('//tbody//td[.="'+'Italian'+rn+'"]')
        expect(await expCategory.getText()).toContain('Italian'+rn)


    })


    it('Add Restaurant',async()=>{

        await AdminHomePage.btnAddRestaurant.click()
        const resImagePath=await browser.uploadFile('res4.jpg')
        AddResaurantPage.addRestaurant('Jordania'+rn,'Jordania'+rn+'gmail.com',Math.trunc(Math.random()*10000000000),'www.jordania'+rn+'.com','9am','9pm','24hr-x7',resImagePath,'Italian'+rn,'Jordania'+rn+',Dubai Mall - Galeries Lafayette Le Gourmet  2nd Level, Galeries Lafayette, The Dubai Mall - Dubai - United Arab Emirates')
        await browser.waitUntil(()=>AddResaurantPage.confirmMsg.isDisplayed())
        expect(await AddResaurantPage.confirmMsg.getText()).toContain('New Restaurant Added Successfully')
        console.log(await AddResaurantPage.confirmMsg.getText());

    })

    it('to check whether restaurant is added',async()=>{

        await AdminHomePage.btnAllRestaurant.click()
        let RestaurantListName=await Promise.all(await AllRestaurantPage.restaurantList.map( async v=>await v.getText()))
        console.log(RestaurantListName);
        let res=RestaurantListName.includes('Jordania'+rn)
        console.log('-------------------------xxxxxxxxxxxxx'+res+'xxxxxxxxxxxxxxx------------------------------');

    })

    
})

