describe('Scroll action', async () => {
   
    it('scroll', async () => {
       await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Shopping_Application")

       browser.waitUntil(async()=>(await browser.getTitle())==="Shopping Portal Home Page")

       await browser.scroll(0,500)

       const info=await browser.$('//h4[.="information"]')
       info.scrollIntoView()

       await browser.pause(4000)
    })
})