import {baseUrl} from "../services/serviceCenter";

export async function fetchListDataEvent() {
    const data=await fetch(baseUrl+`/events`,
        {method:"GET"})
    console.log(data);
    return data.json();
}
