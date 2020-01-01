import Swal from "sweetalert2";

export async function registrationPost(userInfo) {
    const data = await  fetch(`http://localhost:9090/user`,
        {
            method: "POST", headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userInfo)
        }
    ).then(response=>{
        return response.json();
    }).catch(error=>{
        return error;
    })
return data;

}
export async function fetchDataRoleByRoleName(roleName) {
    const data=await fetch(`http://localhost:9090/role-name?roleName=${roleName}`,
        {method:"GET"})
        .then((response)=>{
        return response.json()
    }).catch(error=>{
        return error
    });
    console.log(data);
    return data;
}
