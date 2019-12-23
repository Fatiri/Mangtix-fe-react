import Swal from "sweetalert2";
import {internalServerError500} from "../../../components/constants";

export async function saveDataCategory(event) {
    const data = await fetch("http://localhost:9090/category", {method:"POST",
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
                // internalServerError500()
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry, the category name already exists',
                    timer:3000
                })
            }
        }).catch(reason => {
        })
    return data;
}

export async function fetchDataCategory() {
    const data=await fetch(`http://localhost:9090/categories`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
