import Swal from "sweetalert2";
import {baseUrl} from "../../../services/serviceCenter";

export async function saveDataBooking(event) {
    const data = await fetch(baseUrl+`/booking`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(event)
    });

    if (data.status === 200) {
        await Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data has been saved',
            showConfirmButton: false,
            timer: 3000
        })

        return await data.json();
    } else if (data.status === 500) {
        await Swal.fire({
            icon: 'error',
            title: 'Sorry!!!',
            timer: 3000
        });
        return null;
    }
}

export async function fetchDataBookingByUser(userId) {
    const data=await fetch(baseUrl+`/booking-user?userId=${userId}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function fetchDataBookingById(id) {
    const data=await fetch(baseUrl+`/booking/${id}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

export async function fetchDataBookingAll() {
    const data=await fetch(baseUrl+`/booking-list`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function fetchDataUserAll() {
    const data=await fetch(baseUrl+`/users`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function fetchDataUserId(userId) {
    const data=await fetch(baseUrl+`/user/${userId}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
