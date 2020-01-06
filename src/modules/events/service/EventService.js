import Swal from "sweetalert2";
import {serverAddress} from "../../../server/ServerConstant";

export async function saveDataEvent(event,multipartFile,multipartImage) {
    let formData = new FormData();
    formData.append("multipartFile", multipartFile);
    formData.append("multipartImage", multipartImage);
    formData.append("event", JSON.stringify(event));
    return await fetch(`${serverAddress}/event`, {
        method: "POST",
        body: formData})
            if (formData.status===200){
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Data has been saved',
                    showConfirmButton: false,
                    timer: 3000
                })
                return formData.json();
            } else {
                await Swal.fire({
                    icon: 'error',
                    title: 'Sorry...',
                    timer: 3000
                })
            }
    return formData;
}
export async function updateDataEvent(event) {
    const data = await fetch(`${serverAddress}/event`, {method:"PUT",
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
                    title: 'Sorry!!!',
                    timer: 3000
                })
            }
    return data;
}

export async function fetchDataEvent() {
    const data=await fetch(`${serverAddress}/events`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
        return data;
}

export async function fetchDataEventByCompany(event) {
    const data=await fetch(`${serverAddress}/event-company/?companyId=${event}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function fetchDataEventId(id) {
    const data = await fetch(`${serverAddress}/event/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
    console.log(data);
    return data;
}
export async function fetchDataEventDetailId(id) {
    const data = await fetch(`${serverAddress}/event-detail/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
    console.log(data);
    return data;
}
export async function fetchDataEventByEventDetail(eventDetailId) {
    const data = await fetch(`${serverAddress}/event-detail?eventDetailId=${eventDetailId}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
    console.log(data);
    return data;
}
