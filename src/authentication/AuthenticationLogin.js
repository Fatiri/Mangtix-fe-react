import jwt from "jsonwebtoken"

export default class AuthenticationLogin {

    isLogin(){
        const token = localStorage.getItem("token")
        return !!token &&  !this.isTokenExpired(token)
    }

    isTokenExpired(token) {
        try {
            const decoded = jwt.decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }
}