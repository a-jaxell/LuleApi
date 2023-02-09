import express from "express";
import fetch from "node-fetch";

export const displayRating = express.Router();

displayRating.get("/movies/:id/rating", async (req, res) => {
  const movieID = req.params.id;
  const response = await fetch(
    `https://plankton-app-xhkom.ondigitalocean.app/api/reviews?filters%5Bmovie%5D=${movieID}`
  );
  const reviewData = await response.json();

  const data = reviewData.data;
  let allRating = data.map((rating) => {
    return rating.attributes.rating;
  });

  //removing value of null if it exist
  let nullValue = null;
  allRating = allRating.filter((item) => item !== nullValue);

  //function to get average rating.
  function averageRating(array) {
    let sum = 0;

    //round rating to 1 decimal
    array.forEach((rating) => {
      sum += rating / allRating.length;
      sum = Math.round(sum * 10) / 10;
    });

    return sum;
  }

  if (allRating.length >= 5) {
    let roundedRating = averageRating(allRating);
    res.status(200).send({ body: roundedRating });
  } else {
    //här ska funktion med imbd api in
    return;
  }
});
