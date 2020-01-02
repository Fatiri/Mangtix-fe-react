import Swal from "sweetalert2";

export async function saveDataEvent(event,multipartFile,multipartImage) {
    let formData = new FormData();
    formData.append("multipartFile", multipartFile);
    formData.append("multipartImage", multipartImage);
    formData.append("event", JSON.stringify(event));
    return await fetch(`http://localhost:9090/event`, {
        method: "POST",
        body: formData,})
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
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry...',
                    timer:3000
                })
            }
        }).catch(reason => {
            console.log(reason)
        })
    return formData;
}
export async function updateDataEvent(event) {
    const data = await fetch("http://localhost:9090/event", {method:"PUT",
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
                    title: 'Sorry!!!',
                    timer:3000
                })
            }
        }).catch(reason => {
        })
    return data;
}

export async function fetchDataEvent() {
    const data=await fetch(`http://localhost:9090/events`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

export async function fetchDataEventByCompany(event) {
    const data=await fetch(`http://localhost:9090/event-company/?companyId=${event}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function fetchDataEventId(id) {
    const data = await fetch(`http://localhost:9090/event/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
    console.log(data);
    return data;
}
export async function fetchDataEventDetailId(id) {
    const data = await fetch(`http://localhost:9090/event-detail/${id}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
    console.log(data);
    return data;
}
export async function fetchDataEventByEventDetail(eventDetailId) {
    const data = await fetch(`http://localhost:9090/event-detail?eventDetailId=${eventDetailId}`, {method: "GET"})
        .then((response) => {
            return response.json()
        });
    console.log(data);
    return data;
}
