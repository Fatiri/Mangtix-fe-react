import Swal from "sweetalert2";
import {baseUrl} from "../../../services/serviceCenter";

export async function saveDataCompany(event) {
    const data = await fetch(baseUrl+`/company`, {method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(event)})
            if (data.status===200){
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Data has been saved',
                    showConfirmButton: false,
                    timer: 3000
                })
                return data.json();
            } else if (data.status===500){
                await Swal.fire({
                    icon: 'error',
                    title: 'Sorry,..!!',
                    timer: 3000
                })
            }
    return data;
}

export async function fetchDataCompany() {
    const data=await fetch(baseUrl+`/companies`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
