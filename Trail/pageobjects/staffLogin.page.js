class staffLoginPage
{
    get staffId_tf()
    {
        return $('input[name="staff_id"]')
    }

    get password_tf()
    {
        return $('input[name="password"]')
    }

    get login_btn()
    {
        return $('input[name="staff_login-btn"]')
    }
}
export default new staffLoginPage