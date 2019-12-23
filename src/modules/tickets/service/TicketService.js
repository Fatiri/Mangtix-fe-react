import Swal from "sweetalert2";

export async function saveDataTicket(event) {
    const data = await fetch("http://localhost:9090/ticket", {method:"POST",
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

export async function fetchDataTicket() {
    const data=await fetch(`http://localhost:9090/tickets`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

export async function fetchDataTicketById(id) {
    const data=await fetch(`http://localhost:9090/ticket/{id}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
