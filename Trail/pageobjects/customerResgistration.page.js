class customerResgistrationPage
{
    get name_tf()
    {
        return $('input[name="name"]')
    }

    get gender_dd()
    {
        return $('select[name="gender"]')
    }

    get mobile_tf()
    {
        return $('input[name="mobile"]')
    }

    get email_tf()
    {
        return $('input[name="email"]')
    }

    get landline_tf()
    {
        return $('input[name="landline"]')
    }

    get dateOfBirth_tf()
    {
        return $('input[name="dob"]')
    }

    get pan_tf()
    {
        return $('input[name="pan_no"]')
    }

    get citizenship_tf()
    {
        return $('input[name="citizenship"]')
    }

    get homeaddress_tf()
    {
        return $('input[name="homeaddrs"]')
    }

    get officeaddrs_tf()
    {
        return $('input[name="officeaddrs"]')
    }

    get state_dd()
    {
        return $('select[name="state"]')
    }

    get city_dd()
    {
        return $('select[name="city"]')
    }

    get pincode_tf()
    {
        return $('input[name="pin"]')
    }

    get arealocation_tf()
    {
        return $('input[name="arealoc"]')
    }

    get nomineeName_tf()
    {
        return $('input[name="nominee_name"]')
    }

    get nomineeAccNo()
    {
        return $('input[name="nominee_ac_no"]')
    }

    get accounttype()
    {
        return $('select[name="acctype"]')
    }

    get submit_btn()
    {
        return $('input[name="submit"]')
    }
}
export default new customerResgistrationPage