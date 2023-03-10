class pendingCustomerPage
{
    get applicationNoSearch_tf()
    {
        return $('input[name="application_no"]')
    }

    get Search_btn()
    {
        return $('input[name="search_application"]')
    }

    get tableData()
    {
        return $('//tr/td')
    }
    appNo=''
    get applicantName()
    {
        return $(`//tr/td[.="${this.appNo}"]/following-sibling::td[1]`)
    }
    set applicantNo(num)
    {
        this.appNo=num

    }

}
export default new pendingCustomerPage