import express from "express";
import fetch from "node-fetch";

export const sendReviewServer = express.Router();

sendReviewServer.post("/movies/:id/review", async (req, res) => {
  await fetch("https://plankton-app-xhkom.ondigitalocean.app/api/reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });
});

export async function getReview() {
  const res = await fetch(
    "https://plankton-app-xhkom.ondigitalocean.app/api/reviews"
  );
  const dataReview = await res.json();
  return dataReview.data;
}
