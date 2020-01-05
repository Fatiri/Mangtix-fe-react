import {baseUrl} from "../../../services/serviceCenter";

export async function fetchDataUserBYId(id) {
    const data=await fetch(baseUrl+`/user/${id}`,
        {method:"GET"}).then((response)=>{
        console.log(response)
        return response.json()
    });
    return data;
}
