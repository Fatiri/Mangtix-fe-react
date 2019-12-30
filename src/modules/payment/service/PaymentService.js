import {badRequest400, succsessFetchData200} from "../../../components/constants";

export async function saveDataPayment(event) {
    const data = await fetch("http://localhost:9090/payment", {method:"POST",
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

export async function fetchDataPayments() {
    const data=await fetch(`http://localhost:9090/payments`,
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

