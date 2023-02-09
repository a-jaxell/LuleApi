import express from "express";
import jsonwebtoken from "jsonwebtoken";

export const jwtSend = express.Router();
export const jwtProtected = express.Router();

const secretTokken = "sendReviewSignature";

jwtSend.post("/movies/:id/sendReview", (req, res) => {
  const header = req.headers.authorization;
  const capital = req.body.data.capital;

  const headerString = header.slice(6);
  const credentials = atob(headerString);

  const [firstName, lastName] = credentials.split(":");

  if (capital.toLocaleLowerCase() === "stockholm") {
    const jwtToken = jsonwebtoken.sign(
      {
        firstName: firstName.toLocaleLowerCase(),
        lastName: lastName.toLocaleLowerCase(),
      },
      secretTokken,
      { expiresIn: "15min" }
    );

    res.status(200).json({
      token: jwtToken,
    });
  } else {
    res.status(401).json({
      error: "not valid",
    });
  }
});

jwtProtected.get("/movies/:id/protected", async (req, res) => {
  const header = req.headers.authorization;
  const token = header.slice(7);
  const decode = jsonwebtoken.decode(token, secretTokken);

  if (decode) {
    res
      .status(200)
      .json({ firstname: decode.firstName, lastname: decode.lastName });
  } else {
    res.status(400).json({ error: "not allowed" });
  }
});
