class UserLoginPage{
    
    get inputUsername () {
        return $('input[name="username"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get btnLogin () {
        return $('input[name="submit"]');
    }

    async Userlogin (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open () {
        return super.open('Adminlogin');
    }
}
export default new UserLoginPage();
