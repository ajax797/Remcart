describe('to handle dropdown', async () => {
    it('open', async () => {
       await browser.maximizeWindow()
       await browser.url("https://testingserver/domain/Online_Shopping_Application/admin")

       const username = await browser.$('input[name="username"]')
       await username.setValue('admin')

       const password = await browser.$('input[name="password"]')
       await password.setValue('Test@123')
       
       const login = await browser.$('button[name="submit"]')
       await login.click()

       console.log(await browser.getTitle())
       expect(browser).toHaveTitleContaining("Admin| Change Password")
    

    const subCategory = await browser.$('//a[.="Sub Category "]')
    await subCategory.click()

    const Categorydd = await browser.$('select[name="category"]')
    await Categorydd.selectByVisibleText('Electronics')

    await browser.pause(3000)

    const subcategoryName = await browser.$('input[name="subcategory"]')
    await subcategoryName.setValue('Mobiles')

    const createsubBtn = await browser.$('button[name="submit"]')
    await createsubBtn.click()

    const insertProduct = await browser.$('//a[.="Insert Product "]')
    await insertProduct.click()

    const categoryDD = await browser.$('select[name="category"]')
    await categoryDD.selectByAttribute('value','4')
    await browser.pause(3000)

    const subcategoryDD = await browser.$('select[name="subcategory"]')
    await subcategoryDD.selectByIndex(3)
    await browser.pause(3000)

    const productName = await browser.$('input[name="productName"]')
    await productName.setValue('s22')

    const productCompany = await browser.$('input[name="productCompany"]')
    await productCompany.setValue('Samsung')

    const productpricebd = await browser.$('input[name="productpricebd"]')
    await productpricebd.setValue('50000')

    const productprice = await browser.$('input[name="productprice"]')
    await productprice.setValue('45000')

    const productDescription = await browser.$('textarea[name="productDescription"]')
    await productDescription.setValue('description of samsung s22')

    })

})
