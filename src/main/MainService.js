export async function fetchListDataEvent() {
    const data=await fetch(`http://localhost:9090/events`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
