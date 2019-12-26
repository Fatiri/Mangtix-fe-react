export async function registrationPost(userInfo) {
    const data = await  fetch(`http://localhost:9090/user`,
        {
            method: "POST", headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userInfo)
        }
    )
        .then((response)=>{
            console.log(response)
            return response.json()
        })
        .catch(reason => {
            console.log(reason)
        })

    return data;
}