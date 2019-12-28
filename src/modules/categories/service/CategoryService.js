import Swal from "sweetalert2";

export async function saveDataCategory(event) {
    const data = await fetch("http://localhost:9090/category", {method:"POST",
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
    const data=await fetch(`http://localhost:9090/categories`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

export async function fetchDataCategoryById(id) {
    const data=await fetch(`http://localhost:9090/category/${id}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

export async function deleteDataCategoryById(id) {
    const data=await fetch(`http://localhost:9090/category/${id}`,
        {method:"DELETE"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
