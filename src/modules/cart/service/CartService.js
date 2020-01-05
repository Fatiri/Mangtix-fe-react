import {badRequest400, internalServerError500, succsessFetchData200} from "../../../components/constants";
import Swal from "sweetalert2";
import {baseUrl} from "../../../services/serviceCenter";

export async function saveDataCart(event) {
    const data = await fetch(baseUrl+`/cart`, {method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(event)})
            if (data.status===200){
                await succsessFetchData200(data)
                return data.json();
            } else {
                await badRequest400()
            }
    return data;
}
export async function updateDataCart(event) {
    const data = await fetch(baseUrl+`/cart`, {method:"PUT",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(event)})
            if (data.status===200){
                await succsessFetchData200(data)
                return data.json();
            } else if (data.status===400){
                await badRequest400(data)
            }else{
                await internalServerError500(data);
            }
    return data;
}
export async function fetchDataCartsByUser(userId) {
    const data=await fetch(baseUrl+`/cart-user?userId=${userId}`,
        {method:"GET"})
        return data.json()
}
export async function fetchDataCartsById(id) {
    const data=await fetch(baseUrl+`/cart/${id}`,
        {method:"GET"})
    console.log(data);
    return data.json()
}
export async function deleteCart(id) {
    const data=await fetch(baseUrl+`/cart/${id}`,
        {method:"DELETE"})
    console.log(data);
    return data.json()
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
    return fetch(baseUrl+`/cart/${id}`, {
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
