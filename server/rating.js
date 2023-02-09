import express from "express";
import fetch from "node-fetch";

export const displayRating = express.Router();

export async function getRatingData(id) {
  const response = await fetch(
    "https://plankton-app-xhkom.ondigitalocean.app/api/reviews?filters%5Bmovie%5D=" +
      id
  );
  const reviewData = await response.json();
  const data = reviewData.data;
  return data;
}

displayRating.get("/movies/:id/rating", async (req, res) => {
  const movieID = req.params.id;

  const data = await getRatingData(movieID);

  let allRating = data.map((rating) => {
    return rating.attributes.rating;
  });

  //removing value of null if it exist
  let nullValue = null;
  allRating = allRating.filter((item) => item !== nullValue);
  console.log(allRating);

  let sum = allRating.reduce(function (a, b) {
    return a + b;
  });

  let result = sum / allRating.length;

  let roundedRating = Math.round(result * 10) / 10;

  if (allRating.length >= 5) {
    res.status(200).send({ body: roundedRating });
  } else {
    //här ska funktion med imbd api in
    return;
  }
});
