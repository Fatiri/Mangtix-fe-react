import {badRequest400, succsessFetchData200} from "../../../components/constants";
import Swal from "sweetalert2";
import {serverAddress} from "../../../server/ServerConstant";

export async function saveDataCart(event) {
    const data = await fetch(`${serverAddress}/cart`, {method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(event)})
        .then((response) => {
            if (response.status===200){
                succsessFetchData200(response)
                return response.json();
            } else {
                badRequest400()
            }
        }).catch(reason => {
        })
    return data;
}
export async function updateDataCart(event) {
    const data = await fetch(`${serverAddress}/cart`, {method:"PUT",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(event)})
        .then((response) => {
            if (response.status===200){
                succsessFetchData200(response)
                return response.json();
            } else {
                badRequest400()
            }
        }).catch(reason => {
        })
    return data;
}
export async function fetchDataCartsByUser(userId) {
    const data=await fetch(`${serverAddress}/cart-user?userId=${userId}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function fetchDataCartsById(id) {
    const data=await fetch(`${serverAddress}/cart/${id}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function deleteDataCartsById(id) {
    await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })
    return fetch(`${serverAddress}/cart/${id}`, {
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
