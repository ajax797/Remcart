//Login as Admin, add a Category, add a Restaurant in that category, Check whether the Restaurant is created in all restuarant module

//var adminLoginPage = require('./adminLogin.page.js');
import AdminLoginPage from '../pageobjects/adminLogin.page.js'
import AdminHomePage from '../pageobjects/adminHome.page.js'
import AddCategoryPage from '../pageobjects/adminAddCategory.page.js'
import AddResaurantPage from '../pageobjects/adminAddRestaurant.page.js'
import AllRestaurantPage from '../pageobjects/adminAllRestaurant.page.js'

describe('Adding restaurant ', async () => {
    let rn=Math.trunc(Math.random()*1000)
    var CategoryName='Italian'+rn
    it('login as Admin', async () => {
       await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin")
       expect(browser).toHaveTitleContaining("Admin Login")
       await AdminLoginPage.Adminlogin('admin','codeastro')
       await browser.waitUntil(async()=>(await browser.getTitle())==="Admin Panel")
       expect(browser).toHaveTitleContaining("Admin Panel")
    })

    it('Add category',async()=>{
        await AdminHomePage.Restaurant_btn.click()
        await AdminHomePage.AddCategory_btn.click()
        await AddCategoryPage.addCategory(CategoryName)
        await AddCategoryPage.Category_Table.waitForDisplayed({timeout:3000})
        AddCategoryPage.select_Category=CategoryName
        expect(await (await AddCategoryPage.expCategoryName).getText()).toContain(CategoryName)
    })


    it('Add Restaurant',async()=>{
        await AdminHomePage.AddRestaurant_btn.click()
        const resImagePath=await browser.uploadFile('res4.jpg')
        await AddResaurantPage.addRestaurant('Jordania'+rn,'Jordania'+rn+'gmail.com',Math.trunc(Math.random()*10000000000),'www.jordania'+rn+'.com','9am','9pm','24hr-x7',resImagePath,CategoryName,'Jordania'+rn,'Dubai Mall - Galeries Lafayette Le Gourmet  2nd Level, Galeries Lafayette, The Dubai Mall - Dubai - United Arab Emirates')
        await browser.waitUntil(()=>AddResaurantPage.confirm_Msg.isDisplayed())
        expect(await AddResaurantPage.confirm_Msg.getText()).toContain('New Restaurant Added Successfully')
        console.log(await AddResaurantPage.confirm_Msg.getText());
    })

    it('to check whether restaurant is added',async()=>{
        await AdminHomePage.AllRestaurant_btn.click()
        let RestaurantListName=await Promise.all(await AllRestaurantPage.restaurantList_table.map( async v=>await v.getText()))
        console.log(RestaurantListName);
        expect(RestaurantListName.includes('Jordania'+rn)).toBeTruthy()
        let res=RestaurantListName.includes('Jordania'+rn)
        if (res==true) 
        {
            console.log('Restaurant added successfully');
        }
    })
})

