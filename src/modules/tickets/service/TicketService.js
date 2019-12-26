import Swal from "sweetalert2";

export async function saveDataTicket(event) {
    const data = await fetch("http://localhost:9090/ticket", {
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

export async function updateDataTicket(event) {
    const data = await fetch("http://localhost:9090/ticket", {
        method: "PUT",
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

export async function fetchDataTicket() {
    const data=await fetch(`http://localhost:9090/tickets`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

export async function fetchDataTicketById(id) {
    const data=await fetch(`http://localhost:9090/ticket/${id}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

export async function fetchDataTicketByCategory(event) {
    const data=await fetch(`http://localhost:9090/tickets-category?${event}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
