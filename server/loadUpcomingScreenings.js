import fetch from "node-fetch"

export default async function loadUpcomingScreenings(param) {

    const baseUrl =
    "https://plankton-app-xhkom.ondigitalocean.app/api/screenings?populate=movie&filters[movie]=";
    
    const res = await fetch(baseUrl + param)
    const data = await res.json();

    return data.data.map((elem) => {
        return {
            starttime: elem.attributes.start_time,
            room: elem.attributes.room,
        };
    }).filter( elem => elem.starttime > new Date().toISOString())
    
    
}