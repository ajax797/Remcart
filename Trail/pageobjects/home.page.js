class homePage
{
    get openAccount_btn()
    {
        return $('//li[contains(.,"Open Account")]/..')
    }

    get staff_Login_btn()
    {
        return $('//a[contains(.,"Staff Login")]')
    }
}
export default new homePage