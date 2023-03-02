//Login as Admin, add a Category, add a Restaurant in that category, Check whether the Restaurant is created in allRestuarant module

//var adminLoginPage = require('./adminLogin.page.js');
import AdminLoginPage from '../pageobjects/adminLogin.page.js'
import AdminHomePage from '../pageobjects/adminHome.page.js'
import AddCategoryPage from '../pageobjects/adminAddCategory.page.js'
import AddResaurantPage from '../pageobjects/adminAddRestaurant.page.js'
import AllRestaurantPage from '../pageobjects/adminAllRestaurant.page.js'
import { expect } from 'chai'
describe('Adding restaurant ', async () => {
    let rn=Math.trunc(Math.random()*1000)
    var CategoryName='Italian'+rn
    var RestaurantName='Jordania'+rn
    it('login as Admin', async () => {
       await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System/admin")
       expect(await browser.getTitle()).to.contain("Admin Login")
       await AdminLoginPage.Adminlogin('admin','codeastro')
       await browser.waitUntil(async()=>(await browser.getTitle())==="Admin Panel")
       expect(await browser.getTitle()).to.contain("Admin Panel")
    })

    it ('Add category',async()=>{
        await AdminHomePage.Restaurant_btn.click()
        await AdminHomePage.AddCategory_btn.click()
        expect(await browser.getTitle()).to.contain("Add Category")
        await AddCategoryPage.addCategory(CategoryName)
        expect( await AddCategoryPage.Category_Table.waitForDisplayed()).to.be.true
        AddCategoryPage.select_Category=CategoryName
        expect(await (await AddCategoryPage.expCategoryName).getText()).to.contain(CategoryName)
    })

    it ('Add Restaurant',async()=>{
        await AdminHomePage.AddRestaurant_btn.click()
        expect(await browser.getTitle()).to.contain("Add Restaurant")
        const resImagePath=await browser.uploadFile('res4.jpg')
        await AddResaurantPage.addRestaurant(RestaurantName,RestaurantName+'gmail.com',Math.trunc(Math.random()*10000000000),RestaurantName+'.com','9am','9pm','24hr-x7',resImagePath,CategoryName,RestaurantName+',Dubai Mall - Galeries Lafayette Le Gourmet  2nd Level, Galeries Lafayette, The Dubai Mall - Dubai - United Arab Emirates')
        await browser.waitUntil(()=>AddResaurantPage.confirm_Msg.isDisplayed())
        expect(await AddResaurantPage.confirm_Msg.getText()).to.contain('New Restaurant Added Successfully')
        console.log(await AddResaurantPage.confirm_Msg.getText());
    })

    it ('to check whether restaurant is added',async()=>{
        await AdminHomePage.AllRestaurant_btn.click()
        expect(await browser.getTitle()).to.contain("All Restaurants")
        let RestaurantListName=await Promise.all(await AllRestaurantPage.restaurantList_table.map( async v=>await v.getText()))
        expect(RestaurantListName.includes(RestaurantName)).to.be.true
        let res=RestaurantListName.includes(RestaurantName)
        if (res==true) 
        {
            console.log('Restaurant added successfully');
        }
    })
})

