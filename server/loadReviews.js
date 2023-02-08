import fetch from "node-fetch";

  //Get all reviews for a movie
  export async function loadReviews(params,page){
    //URL to API
    const reviewbaseUrl = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews/";
    console.log(params[0]);
    console.log("page: "+page);
    //Result from call to API
    const urlToCall = reviewbaseUrl + "?filters[movie]=" + params[0]+"&pagination[pageSize=5&pagination[page]="+page;
    console.log(urlToCall);
    const res = params ? await fetch(reviewbaseUrl + "?filters[movie]=" + params[0]+"&pagination[pageSize]=5&pagination[page]="+page) : await fetch(reviewbaseUrl);
    //Convert to JSON
    
    const data = await res.json();
    const pages = data.meta;
      return {
        reviews: data,
        pages: pages
      };
  }