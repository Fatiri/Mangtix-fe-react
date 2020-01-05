import {badRequest400, succsessFetchData200} from "../../../components/constants";
import {baseUrl} from "../../../services/serviceCenter";

export async function saveDataPayment(event) {
    const data = await fetch(baseUrl+`/payment`, {method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(event)})
            if (data.status===200){
                await succsessFetchData200(data)
                return data.json();
            } else {
                await badRequest400()
            }
    return data;
}

export async function fetchDataPayments() {
    const data=await fetch(baseUrl+`/payments`,
        {method:"GET"})
    console.log(data);
    return data.json()
}
export async function fetchDataUserAll() {
    const data=await fetch(baseUrl+`/users`,
        {method:"GET"})
    console.log(data);
    return data.json()
}

