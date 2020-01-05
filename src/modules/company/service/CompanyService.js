import Swal from "sweetalert2";
import {serverAddress} from "../../../server/ServerConstant";

export async function saveDataCompany(event) {
    const data = await fetch(`${serverAddress}/company`, {method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(event)})
        .then((response) => {
            if (response.status===200){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Data has been saved',
                    showConfirmButton: false,
                    timer: 3000
                })
                return response.json();
            } else if (response.status===500){
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry,..!!',
                    timer:3000
                })
            }
        }).catch(reason => {
        })
    return data;
}

export async function fetchDataCompany() {
    const data=await fetch(`${serverAddress}/companies`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
