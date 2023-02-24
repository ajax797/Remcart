describe('Calender popup', async () => {

    it('selecting date', async () => {
        await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Tourism_Management_System/")

       const details = await browser.$('//a[.="Details"]')
       await details.click()

       const fromDate = await browser.$('input[name="fromdate"]')
       await fromDate.click()

       let fdate=25
       let fmonth='February'
       let fyear=2023

       const selectFDate = await browser.$('//span[.="'+fmonth+'"]/../span[.="'+fyear+'"]/../../..//a[.="'+fdate+'"]')
       await selectFDate.click()

       const toDate = await browser.$('input[name="todate"]')
       await toDate.click()

       let tdate=28
       let tmonth='February'
       let tyear=2023

       const selectTDate = await browser.$('//span[.="'+tmonth+'"]/../span[.="'+tyear+'"]/../../..//a[.="'+tdate+'"]')
       await selectTDate.click()

       await browser.scroll(0,500)

       const book = await browser.$('//a[.=" Book"]')
       await book.click()

    })

})

