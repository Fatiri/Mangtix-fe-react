import Swal from "sweetalert2";
import {baseUrl} from "../../../services/serviceCenter";

export async function saveDataLocation(event) {
    const data = await fetch(baseUrl+`/location`, {method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(event)})
        .then((response) => {
            if (response.status===200){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Data Location has been saved',
                    showConfirmButton: false,
                    timer: 3000
                })
                return response.json();
            } else if (response.status===500){
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry!!!',
                    timer:3000
                })
            }
        }).catch(reason => {
        })
    return data;
}
export async function fetchDataLocationId(id) {
    const data = await fetch(baseUrl+`/location/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
    console.log(data);
    return data;
}
export async function fetchDataLocation() {
    const data = await fetch(baseUrl+`/locations`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
    console.log(data);
    return data;
}
