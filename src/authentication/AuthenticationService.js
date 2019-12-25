export async function AuthenticationLogin(user){
      const loginGenerateToken = await fetch(`http://localhost:9090/login` ,
          {
              method: "POST", headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(user)
          })
          .then((response)=>{
              return response.json()
          })
          .catch(reason => {
              alert(reason)
          })
}