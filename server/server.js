import express from "express";
import expressLayouts from "express-ejs-layouts";
import apiAdapter from "./apiAdapter.js";
import { getReviews } from "./apiAdapter.js";   

const app = express();

app.set("layout", "../views/layouts/layout.ejs");
app.set("view engine", "ejs");

app.use(expressLayouts);
app.use("/static", express.static("./static"));
app.use("/js", express.static("./static/jsfrontend"));
app.use("/src", express.static("./src"));

app.get("/", async (req, res) => {
  res.status(200)
     .render("home", { movies: await apiAdapter() });
});

app.get("/movies/:id", async (req, res) => {
  const movie = await apiAdapter(req.params.id);
  if (movie != undefined) {
    const reviews = await getReviews(req.params.id, 5);
    console.log(reviews);
    res.status(200)
       .render("movies", {movie, reviews});
  } else {
    res.status(404)
       .render("thisMovieNotFound");
  }
});

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
  res.status(404)
     .render("404");
});

export default app;
