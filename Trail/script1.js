//Login to application, create organisation by giving madetory fields, check whether the organisation is created 

describe('url', async () => {
    it('open', async () => {
        await browser.maximizeWindow()
       await browser.url("http://testingserver:8888/")

       const username = await browser.$('input[name="user_name"]')
       await username.setValue('admin')

       const password = await browser.$('input[name="user_password"]')
       await password.setValue('admin')
       
       const login = await browser.$('input[type="submit"]')
       await login.click()

        console.log(await browser.getTitle())
    
    await expect(browser).toHaveTitleContaining("Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM")
    
        const orglink=await browser.$('=Organizations')
        await orglink.click()

        const addorg=await browser.$('//a/img[@title="Create Organization..."]')
        await addorg.click()

        const orgname=await browser.$('//input[@name="accountname"]')
        await orgname.setValue('AjaxOrganisaton4')

        const savebtn=await browser.$('//input[normalize-space(@value)="Save"]')
        await savebtn.click()
        //await browser.pause(5000)
        const orginfo=await browser.$('//span[@class="dvHeaderText"]')
        //console.log(await orginfo.getText());
        await expect(await orginfo.getText()).toContain('AjaxOrganisaton')

})
})



