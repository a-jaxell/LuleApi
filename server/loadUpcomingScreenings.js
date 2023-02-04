import fetch from "node-fetch";

export default async function loadUpcomingScreenings(param) {
  const baseUrl =
    "https://plankton-app-xhkom.ondigitalocean.app/api/screenings?populate=movie&filters[movie]=";

  const res = await fetch(baseUrl + param);
  const data = await res.json();

  return data.data.filter((elem) => {
      return (elem) => elem.start_time > new Date().toISOString();
    }).map((elem) => {
      return {
        room: elem.attributes.room,
        date: elem.attributes.start_time.substring(0, 10),
        time: elem.attributes.start_time.substring(11, 16),
      };
    });
}
