import fetch from "node-fetch";

/*
Get reviews for movie x from API
params is an array of parameters
first movieId
second pageNumber
third pageSize
*/
export async function loadReviews(params){
    const reviewbaseUrl = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews/";
    console.log(params[0]);
    const res = params ? await fetch(reviewbaseUrl + "?filters[movie]=" + params[0]+"&pagination[pageSize]=5&pagination[page]=1") : await fetch(baseUrl);
    const data = await res.json();
    return data.data
    .filter((elem) => {
      return (elem) => elem.start_time > new Date().toISOString();
    })
    .map((elem) => {  
      return {
        author: elem.attributes.author,
        comment: elem.attributes.comment,
        rating: elem.attributes.rating,
      };
    });
  }

  /*
export default async function loadUpcomingScreenings(param) {
  const baseUrl =
    "https://plankton-app-xhkom.ondigitalocean.app/api/screenings?populate=movie&filters[movie]=";

  const res = await fetch(baseUrl + param);
  const data = await res.json();

  return data.data
    .filter((elem) => {
      return (elem) => elem.start_time > new Date().toISOString();
    })
    .map((elem) => {
      return {
        room: elem.attributes.room,
        date: elem.attributes.start_time.substring(0, 10),
        time: elem.attributes.start_time.substring(11, 16),
      };
    });
}
*/