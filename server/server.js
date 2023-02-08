import express from "express";
import expressLayouts from "express-ejs-layouts";
import apiAdapter from "./apiAdapter.js";

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

app.get("/movies/:id/rating", async (req, res) => {
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

app.post("/movies/:id/review", async (req, res) => {
  await fetch("https://plankton-app-xhkom.ondigitalocean.app/api/reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });
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
  res.render("404"); //removed statuscode 404 to make it able to send data to server
});

export default app;
