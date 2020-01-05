import Swal from "sweetalert2";
import {serverAddress} from "../../../server/ServerConstant";

export async function registrationPost(userInfo) {
    const data = await  fetch(`${serverAddress}/user`,
        {
            method: "POST", headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userInfo)
        }
    )
    return await data.json();

     if (data.status === 500) {
        await Swal.fire({
            icon: 'error',
            title: 'Sorry user not created!!!',
            timer: 3000
        });
        return null;

    }
}
export async function fetchDataRoleByRoleName(roleName) {
    const data=await fetch(`${serverAddress}/role-name?roleName=${roleName}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
