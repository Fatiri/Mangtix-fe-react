import Swal from "sweetalert2";
import {serverAddress} from "../../../server/ServerConstant";

export async function saveDataCategory(event) {
    const data = await fetch(`${serverAddress}/category`, {method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(event)})
            if (data.status===200){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Data has been saved',
                    showConfirmButton: false,
                    timer: 3000
                })
                return data.json();
            } else if (data.status===500){
                // internalServerError500()
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry, the category name already exists',
                    timer:3000
                })
            }
        return data;
}

export async function fetchDataCategory() {
    const data=await fetch(`${serverAddress}/categories`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

export async function fetchDataCategoryById(id) {
    const data=await fetch(`${serverAddress}/category/${id}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

export async function deleteDataCategoryById(id) {
    await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })
    return fetch(`${serverAddress}/category/${id}`, {
        method: "DELETE", headers: {'Content-Type': 'application/json'},
    }).then((result) => {
        if (result.status === 200) {
            Swal.fire(
                'Deleted!',
                'Your Table has been deleted.',
                'success'
            )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    })
}
