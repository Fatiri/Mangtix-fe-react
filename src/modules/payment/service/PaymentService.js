import {badRequest400, succsessFetchData200} from "../../../components/constants";
import {baseUrl} from "../../../services/serviceCenter";

export async function saveDataPayment(event) {
    const data = await fetch(baseUrl+`/payment`, {method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(event)})
        .then((response) => {
            if (response.status===200){
                // succsessFetchData200(response)
                return response.json();
            } else {
                // badRequest400()
                return response.json()
            }
        }).catch(reason => {
        })
    return data;
}

export async function fetchDataPayments() {
    const data=await fetch(baseUrl+`/payments`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data
}
export async function fetchDataUserAll() {
    const data=await fetch(baseUrl+`/users`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data
}

