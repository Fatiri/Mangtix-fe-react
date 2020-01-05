import {badRequest400, succsessFetchData200} from "../../../components/constants";
import {serverAddress} from "../../../server/ServerConstant";

export async function saveDataPayment(event) {
    const data = await fetch(`${serverAddress}/payment`, {method:"POST",
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
    const data=await fetch(`${serverAddress}/payments`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function fetchDataUserAll() {
    const data=await fetch(`${serverAddress}/users`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

