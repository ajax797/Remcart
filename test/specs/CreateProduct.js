//Login as Admin, Create a Category, Create a Sub category, and insert a product, Check whether the product is created

describe('url', async () => {
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
    
    //create category
    
    const category = await browser.$('//a[.=" Create Category "]')
    await category.click()

    const categoryName = await browser.$('input[name="category"]')
    await categoryName.setValue('Electronics')

    const categoryDes = await browser.$('textarea[name="description"]')
    await categoryDes.setValue('Category is Electronics')

    // const createBtn = await browser.$('button[name="submit"]')
    // await createBtn.click()
    
    //create sub-category

   
    const subCategory = await browser.$('//a[.="Sub Category "]')
    await subCategory.click()

     //shud handle dropdown

    const subcategoryName = await browser.$('input[name="subcategory"]')
    await subcategoryName.setValue('Mobiles')

    // const createsubBtn = await browser.$('button[name="submit"]')
    // await createsubBtn.click()

    //insert product

    const insertProduct = await browser.$('//a[.="Insert Product "]')
    await insertProduct.click()

    //shud handle cat dd
    // const categoryDD = await browser.$('select[name="category"]')
    // await categoryDD.selectByVisibleText('Electronics')

    //shud handle subcat dd
    // const subcategoryDD = await browser.$('select[name="subcategory"]')
    // await subcategoryDD.selectByVisibleText('Mobiles')

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

    const productShippingcharge = await browser.$('input[name="productShippingcharge"]')
    await productShippingcharge.setValue('100')

    const productAvailability = await browser.$('select[name="productAvailability"]')
    await productAvailability.selectByVisibleText('In Stock')

    const productimage1path=await browser.uploadFile('res4.jpg')
    const productimage1 = await browser.$('input[name="productimage1"]')
    await productimage1.setValue(productimage1path)

    // const productimage2path=await browser.uploadFile('C:\Users\ajax2\OneDrive\Desktop\img2.png')
    // const productimage2 = await browser.$('input[name="productimage2"]')
    // await productimage2.setValue(productimage2path)

    // const productimage3path=await browser.uploadFile('C:\Users\ajax2\OneDrive\Desktop\img3.bmp')
    // const productimage3 = await browser.$('input[name="productimage3"]')
    // await productimage3.setValue(productimage3path)

    await browser.pause(5000)

    // const insertbtn = await browser.$('button[name="submit"]')
    // await insertbtn.click()

})
})