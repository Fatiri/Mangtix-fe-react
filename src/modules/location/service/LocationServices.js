import Swal from "sweetalert2";

export async function saveDataLocation(event) {
    const data = await fetch("http://localhost:9090/location", {method:"POST",
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