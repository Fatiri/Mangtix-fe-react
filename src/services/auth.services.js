export async function fetchDataUserBYId(id) {
    const data=await fetch(`http://localhost:9090/user/${id}`,
        {method:"GET"}).then((response)=>{
            console.log(response)
        return response.json()
    });
    return data;
}