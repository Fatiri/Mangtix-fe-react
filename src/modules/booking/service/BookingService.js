import {badRequest400, succsessFetchData200} from "../../../components/constants";

export async function saveDataBooking(event) {
    const data = await fetch("http://localhost:9090/booking", {method:"POST",
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
export async function fetchDataBookingByUser(userId) {
    const data=await fetch(`http://localhost:9090/booking-user?userId=${userId}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function fetchDataBookingById(id) {
    const data=await fetch(`http://localhost:9090/booking/${id}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

export async function fetchDataBookingAll() {
    const data=await fetch(`http://localhost:9090/booking-list`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function fetchDataUserAll() {
    const data=await fetch(`http://localhost:9090/users`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function fetchDataUserId(userId) {
    const data=await fetch(`http://localhost:9090/user/${userId}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
