import UserBasePage from "./userBase.page.js";

class UserLoginPage extends UserBasePage
{
    
    get Username_tf () {
        return $('input[name="username"]');
    }

    get Password_tf () {
        return $('input[name="password"]');
    }

    get Login_btn () {
        return $('input[name="submit"]');
    }

    async Userlogin (username, password) {
        await this.Username_tf.setValue(username);
        await this.Password_tf.setValue(password);
        await this.Login_btn.click();
    }

    open () {
        return super.open('Adminlogin');
    }
}
export default new UserLoginPage();
