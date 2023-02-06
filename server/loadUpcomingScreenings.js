import fetch from "node-fetch";

export default async function loadUpcomingScreenings(param) {
  const baseUrl =
    "https://plankton-app-xhkom.ondigitalocean.app/api/screenings?populate=movie&filters[movie]=";

  const res = await fetch(baseUrl + param);
  const data = await res.json();

  return data.data
    .map((elem) => {
      return {
        room: elem.attributes.room,
        date: elem.attributes.start_time,
      };
    })
    .filter((elem) => {
      if (elem.room && elem.date)
        return (elem) => elem.date > new Date().toISOString();
    });

}


