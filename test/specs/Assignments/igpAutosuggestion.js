describe('igp', async () => {
    it('handling auto suggestions', async () => {
       await browser.maximizeWindow()
       await browser.url("https://www.igp.com/")

       const inputSearch = await browser.$('input[placeholder="Search for gifts"]')
       await inputSearch.setValue('cake')

       await browser.waitUntil(async()=>(await (await browser.$('div[id="searched-Items"]')).isDisplayed()))

       const suggestionsList = await browser.$$('//li[@class="cards-li"]/a/div')
       let suggestionsListText=await Promise.all(suggestionsList.map( async v=>await v.getText()))
       console.log(suggestionsListText);
       
    })
})