import fetch from "node-fetch";

export default class ApiAdapter {
    constructor() {
        this.baseUrl =
        "https://plankton-app-xhkom.ondigitalocean.app/api";
    }

    async loadUpcomingScreening(id) {
        const res = await fetch(this.baseUrl + "/screenings?populate=movie&filters[movie]=" + id);
        const data = await res.json();
        return data;
    }
}