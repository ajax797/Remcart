import { expect } from 'chai'
import confirmPage from '../pageobjects/confirm.page.js'
import customerResgistrationPage from '../pageobjects/customerResgistration.page.js'
import HomePage from '../pageobjects/home.page.js'
import pendingCustomerPage from '../pageobjects/pendingCustomer.page.js'
import staffHomePage from '../pageobjects/staffHome.page.js'
import staffLoginPage from '../pageobjects/staffLogin.page.js'

//open an saving account giving all details, navigate to staff module and check whether application is displayed in pendingCustomer page
describe('open account and check in pending customer',async()=>{
    let expected='ajax'
    let applicationNumber=''
    it('open savings account as user',async()=>{
        await browser.maximizeWindow()
        await browser.url(' http://testingserver/domain/Online_Banking_System/')
        expect(await browser.getTitle()).to.contain('Online Banking System')
        await (await HomePage.openAccount_btn).click()
        expect(await browser.getTitle()).to.contain('Registration Form')
        await (await customerResgistrationPage.name_tf).setValue('ajax')
        await (await customerResgistrationPage.gender_dd).selectByVisibleText('Male')
        await (await customerResgistrationPage.mobile_tf).setValue('1223211122')
        await (await customerResgistrationPage.email_tf).setValue('ajax@gmail.co')
        await (await customerResgistrationPage.landline_tf).setValue('2325655')
        await (await customerResgistrationPage.dateOfBirth_tf).setValue('10101996')
        await (await customerResgistrationPage.pan_tf).setValue('12asd34df')
        await (await customerResgistrationPage.citizenship_tf).setValue('american')
        await (await customerResgistrationPage.homeaddress_tf).setValue('address')
        await (await customerResgistrationPage.officeaddrs_tf).setValue('office address')
        await (await customerResgistrationPage.state_dd).selectByVisibleText('California')
        await (await customerResgistrationPage.city_dd).selectByVisibleText('Los Angeles')
        await (await customerResgistrationPage.pincode_tf).setValue('345334')
        await (await customerResgistrationPage.arealocation_tf).setValue('local area')
        await (await customerResgistrationPage.nomineeName_tf).setValue('ajaxx')
        await (await customerResgistrationPage.nomineeAccNo).setValue('9876767')
        await (await customerResgistrationPage.accounttype).selectByVisibleText('Saving')
        await (await customerResgistrationPage.submit_btn).click()
        expect(await browser.getTitle()).to.contain('Confirm')
        await (await confirmPage.confirm_btn).click()
        await browser.waitUntil(async()=>(await browser.isAlertOpen()))
        let text=await browser.getAlertText()
        for (const key in text) 
        {
            if (text[key]>='0'&&text[key]<='9') 
            {
                applicationNumber=applicationNumber+text[key]
            }
        }
    })
    it('login as staff',async()=>{
        await (await HomePage.staff_Login_btn).click()
        expect(await browser.getTitle()).to.contain('Staff Page')
        await (await staffLoginPage.staffId_tf).setValue('210001')
        await (await staffLoginPage.password_tf).setValue('password')
        await (await staffLoginPage.login_btn).click()
        expect(await browser.getTitle()).to.contain('Staff Home')
    })
    it('check whether application is displayed',async()=>{
        await (await staffHomePage.ApprovePendingAccount_btn).click()


        await (await pendingCustomerPage.applicationNoSearch_tf).setValue(applicationNumber)
        await (await pendingCustomerPage.Search_btn).click()
        await browser.waitUntil(async()=>(await (await pendingCustomerPage.tableData).isDisplayed()))
        pendingCustomerPage.applicantNo=applicationNumber
        let actualResult=await (await pendingCustomerPage.applicantName).getText()
        expect(actualResult).to.be.equal(expected)
    })
})