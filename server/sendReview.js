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

export const api = {
  loadReview: async function () {
    const res = await fetch(
      "https://plankton-app-xhkom.ondigitalocean.app/api/reviews"
    );
    const dataReview = await res.json();
    return dataReview;
  },
};

export default async function sortReview(mock) {
  const payload = await api.loadReview();

  const result = payload.data
    .map((item) => ({
      id: item.id,
      ...item.attributes,
    }))
    .filter((review) => {
      return review.rating >= 3;
    })
    .filter((review) => {
      const createdAtDate = new Date(review.createdAt);
      const now = new Date();
      const diff = now - createdAtDate;
      const sixtyDays = 60 * 24 * 60 * 60 * 1000;
      return diff < sixtyDays;
    });

  return result;
}
