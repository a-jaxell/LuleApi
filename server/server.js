import express from "express";
import expressLayouts from "express-ejs-layouts";
import apiAdapter from "./apiAdapter.js";
import bodyParser from "body-parser";
import { body, validationResult } from "express-validator";


const app = express();

app.set("layout", "../views/layouts/layout.ejs");
app.set("view engine", "ejs");

app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
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
    res.status(200)
       .render("movies", { movie: await apiAdapter(req.params.id) });
  } else {
    res.status(404)
       .render("thisMovieNotFound");
  }
});
/*
app.post("/movies/:id/review", async (req, res) => {
  await fetch("https://plankton-app-xhkom.ondigitalocean.app/api/reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });
});
*/
//using middleware express-validator to validate userinput
//author lenght - min 3
//comment length - min 3
//rating integer min 0 max 5
app.post("/movies/:id/review",
  body('author').isLength({min: 3}),
  body('comment').iLength({min: 3}),
  body('rating').isInt({min:0, max:5
  }),
  async (req,res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()){
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    res.status(200).json({
      success: true,
      message: 'post successful'
    })
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
