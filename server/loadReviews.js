import fetch from "node-fetch";

  //Get all reviews for a movie
  export async function loadReviews(params){
    //URL to API
    const reviewbaseUrl = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews/";
    console.log(params[0]);
    //Result from call to API
    const res = params ? await fetch(reviewbaseUrl + "?filters[movie]=" + params[0]+"&pagination[pageSize=5") : await fetch(reviewbaseUrl);
    //Convert to JSON
    const data = await res.json();
    return data.data
    .filter((elem) => {
      return (elem) => elem.start_time > new Date().toISOString();
    })
    //Map JSON
    .map((elem) => {  
      return {
        author: elem.attributes.author,
        comment: elem.attributes.comment,
        rating: elem.attributes.rating,
      };
    });
  }