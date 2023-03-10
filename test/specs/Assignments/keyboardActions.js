import { Key } from 'webdriverio'
import { expect } from 'chai'
describe('keyboard ', async () => {
    it('keyboard', async () => {
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System")
        
        expect(await browser.getTitle()).to.contain("Home")
        await browser.keys(['Tab',Key.Tab,Key.Tab,Key.Tab,Key.Enter])
        await browser.pause(2000)
        expect(await browser.getTitle()).to.contain("Login")
        await browser.keys(['Tab',Key.Tab,Key.Tab,Key.Tab,'Tab','Tab'])
        await browser.keys('ajax')
        await browser.keys('Tab')
        await browser.keys('123aj456')
        await browser.keys(['Tab',Key.Enter])
        // const username = await browser.$('input[name="username"]')
        // await username.setValue('ajax')
 
        // const password = await browser.$('input[name="password"]')
        // await password.setValue('123aj456')
        
        // const login = await browser.$('input[name="submit"]')
        // await login.click()
 
        browser.waitUntil(async()=>(await browser.getTitle())==="Home")
     
        expect(await browser.getTitle()).to.contain("Home")
     
    })
})
