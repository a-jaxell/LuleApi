import express from "express";
import jsonwebtoken from "jsonwebtoken";

export const jwtSend = express.Router();
export const jwtProtected = express.Router();

const secretTokken = "sendReviewSignature";

//post if user input is valid to acces token
jwtSend.post("/movies/:id/sendReview", (req, res) => {
  const header = req.headers.authorization;
  const capital = req.body.data.capital;

  const headerString = header.slice(6);
  const credentials = atob(headerString);

  const [firstName, lastName] = credentials.split(":");

  if (
    capital.toLocaleLowerCase() === "stockholm" &&
    (firstName, lastName) != ""
  ) {
    const jwtToken = jsonwebtoken.sign(
      {
        firstName: firstName.toLocaleLowerCase(),
        lastName: lastName.toLocaleLowerCase(),
      },
      secretTokken
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

//get request if token exist, first and last sends back
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
