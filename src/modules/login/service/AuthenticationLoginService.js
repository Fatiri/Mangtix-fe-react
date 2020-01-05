import {serverAddress} from "../../../server/ServerConstant";

export async function GenerateTokenAccess(user) {
    const token = await  fetch(baseUrl+`/login`,
        {
            method: "POST", headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }
    )
            console.log(token)
            return token.json()
}
