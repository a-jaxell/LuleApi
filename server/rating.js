import express from "express";
import fetch from "node-fetch";

export const displayRating = express.Router();

async function getRatingData(id) {
    const response = await fetch(
        "https://plankton-app-xhkom.ondigitalocean.app/api/reviews?filters%5Bmovie%5D=" +
        id
    );
    const reviewData = await response.json();
    const data = reviewData.data;
    return data;
}

export function roundRating(passInData) {
    //removing value of null if it exist
    let nullValue = null;
    let filterData = passInData.filter((item) => item !== nullValue);

    let sum = filterData.reduce(function(a, b) {
        return a + b;
    });

    let result = sum / passInData.length;

    let roundedRating = Math.round(result * 10) / 10;

    return roundedRating;
}
const API_BASE = "https://plankton-app-xhkom.ondigitalocean.app/api";
export async function loadReview() {
    const rev = await fetch(API_BASE + "/movies/" + 2);
    const payload = await rev.json();

    // const IMDB_ID = JSON.stringify(payload).id;
    const IMDB_ID = payload.data.attributes.imdbId;
    //const IMDB_ID = "tt2953050"; hårdkodad imdbID
    const OMDB_API = await fetch(
        `http://www.omdbapi.com/?i=${IMDB_ID}&apikey=951b6bb2`
        // "http://www.omdbapi.com/?i=tt3896198&apikey=951b6bb2"
    );
    const OMDB_DATA = await OMDB_API.json();
    //const OMDB_RATING = OMDB_RATING.OMDB_DATA;

    console.log(OMDB_DATA.imdbRating);
    return OMDB_DATA.imdbRating;
}
loadReview();

displayRating.get("/movies/:id/rating", async(req, res) => {
    const movieID = req.params.id;

    const data = await getRatingData(movieID);

    let allRating = data.map((rating) => {
        return rating.attributes.rating;
    });

    let roundedRating = roundRating(allRating);

    if (allRating.length >= 5) {
        res.status(200).send({ body: roundedRating });
    } else {
        //här ska funktion med imbd api in
        return;
    }
});