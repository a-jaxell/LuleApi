import express from "express";
import expressLayouts from "express-ejs-layouts";
import apiAdapter from "./apiAdapter.js";
import { sendReviewServer } from "./sendReview.js";
import { displayRating } from "./rating.js";
import { jwtProtected, jwtSend } from "./jwt.js";

const app = express();

app.set("layout", "../views/layouts/layout.ejs");
app.set("view engine", "ejs");

app.use(expressLayouts);
app.use("/static", express.static("./static"));
app.use("/js", express.static("./static/jsfrontend"));
app.use("/src", express.static("./src"));
app.use(express.json());
app.use(express.urlencoded());

app.get("/", async (req, res) => {
  res.status(200).render("home", { movies: await apiAdapter() });
});

app.get("/movies/:id", async (req, res) => {
  const movie = await apiAdapter(req.params.id);

  if (movie != undefined) {
    res
      .status(200)
      .render("movies", { movie: await apiAdapter(req.params.id) });
  } else {
    res.status(404).render("thisMovieNotFound");
  }
});

//to display rating /movies/:id/rating
app.use(displayRating);

// /movies/:id/review
app.use(sendReviewServer);

app.use(jwtSend);
app.use(jwtProtected);

// TODO fixa repetativa getlisteners
{
  app.get("/openingHours", (req, res) => {
    res.render("openingHours");
  });

  app.get("/bistro-menu", (req, res) => {
    res.render("bistro-menu");
  });

  app.get("/booking", (req, res) => {
    res.render("booking");
  });

  app.get("/about", (req, res) => {
    res.render("about");
  });

  app.get("/giftCard", (req, res) => {
    res.render("giftCard");
  });

  app.get("/matine", (req, res) => {
    res.render("matine");
  });

  app.get("/newsletter", (req, res) => {
    res.render("newsLetter");
  });

  app.get("/premiereFriday", (req, res) => {
    res.render("premiereFriday");
  });

  app.get("/ticket-info", (req, res) => {
    res.render("ticket-info");
  });
  app.get("/upcoming", (req, res) => {
    res.render("upcoming");
  });

  app.get("/WholeProgramPage", (req, res) => {
    res.render("WholeProgramPage");
  });
}

app.use((req, res) => {
  res.render("404"); //removed statuscode 404 to make it able to send data to server
});

export default app;
