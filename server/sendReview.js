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
