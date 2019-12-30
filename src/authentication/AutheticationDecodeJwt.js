import jwt from 'jsonwebtoken'
export default function decodeJwtToken (){
    const data = jwt.decode(localStorage.getItem("token"))
    console.log(data)
    return data;
}