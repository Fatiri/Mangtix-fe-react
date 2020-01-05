import {serverAddress} from "../../../server/ServerConstant";

export async function GenerateTokenAccess(user) {
    const token = await  fetch(`${serverAddress}/login`,
        {
            method: "POST", headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }
    )
        .then((response)=>{
            console.log(response)
            return response.json()
        })
        .catch(reason => {
            console.log(reason)
        })

    return token;
}