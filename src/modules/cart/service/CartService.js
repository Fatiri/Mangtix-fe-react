import {badRequest400, succsessFetchData200} from "../../../components/constants";

export async function saveDataCart(event) {
    const data = await fetch("http://localhost:9090/cart", {method:"POST",
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
    const data=await fetch(`http://localhost:9090/cart-user?userId=${userId}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function fetchDataCartsById(id) {
    const data=await fetch(`http://localhost:9090/cart/${id}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function deleteDataCartsById(id) {
    const data=await fetch(`http://localhost:9090/cart/${id}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
