describe('mouse hover action', async () => {
    it('mouse hover action on more option', async () => {
        await browser.maximizeWindow()
       await browser.url("http://testingserver:8888/")

       const username = await browser.$('input[name="user_name"]')
       await username.setValue('admin')

       const password = await browser.$('input[name="user_password"]')
       await password.setValue('admin')
       
       const login = await browser.$('input[type="submit"]')
       await login.click()
    
        expect(browser).toHaveTitleContaining("Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM")
    
        const more=await browser.$('//a[contains(.,"Dashboard")]/../following-sibling:: td/a')
        await more.moveTo()

        await browser.pause(3000)

        const RB=await browser.$('//a[@name="Recycle Bin"]')
        await RB.click()

        await browser.pause(3000)
    })
})
