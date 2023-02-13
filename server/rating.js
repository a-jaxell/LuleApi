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
export async function loadOMDB(id) {
    const rev = await fetch(API_BASE + "/movies/" + id);
    const payload = await rev.json();

    const IMDB_ID = payload.data.attributes.imdbId;
    const OMDB_API = await fetch(
        `http://www.omdbapi.com/?i=${IMDB_ID}&apikey=951b6bb2`
    );
    const OMDB_DATA = await OMDB_API.json();

    return OMDB_DATA.imdbRating;
}

displayRating.get("/movies/:id/rating", async(req, res) => {
    const data = await getRatingData(req.params.id);

    let allRating = data.map((rating) => {
        return rating.attributes.rating;
    });

    let roundedRating = roundRating(allRating);

    if (allRating.length >= 5) {
        res.status(200).send({ body: roundedRating });
    } else {
        //här ska funktion med imbd api in
        res.status(200).send({ body: await loadOMDB(req.params.id) });
    }
});