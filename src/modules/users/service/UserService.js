import {serverAddress} from "../../../server/ServerConstant";

export async function fetchDataUserBYId(id) {
    const data=await fetch(`${serverAddress}/user/${id}`,
        {method:"GET"}).then((response)=>{
        console.log(response)
        return response.json()
    });
    return data;
}