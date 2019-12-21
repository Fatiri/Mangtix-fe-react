import {badRequest400, succsessFetchData200} from "../../../components/constants";

export async function fetchDataBooking(event) {
    const data = await fetch("http://localhost:9090/booking", {method:"POST",
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
