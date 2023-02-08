import express from "express";
import expressLayouts from "express-ejs-layouts";
import ApiAdapter from "./ApiAdapter.js";
import loadMovies from "./loadMovies.js";
import filterUpcomingScreenings from "./filterUpcomingScreenings.js";

const apiAdapter = new ApiAdapter();

const app = express();

app.set("layout", "../views/layouts/layout.ejs");
app.set("view engine", "ejs");

app.use(expressLayouts);
app.use("/static", express.static("./static"));
app.use("/js", express.static("./static/jsfrontend"));
app.use("/src", express.static("./src"));

app.get("/", async (req, res) => {
  res.status(200)
     .render("home", { movies: await loadMovies() });
});

app.get("/movies/:id", async (req, res) => {
  const movie = await loadMovies(req.params.id);

  if (movie != undefined) {
    res.status(200)
       .render("movies", { movie: await loadMovies(req.params.id) });
  } else {
    res.status(404)
       .render("thisMovieNotFound");
  }

});

app.get("/api/upcoming-screenings/:id", async (req, res) => {
  const load = await apiAdapter.loadUpcomingScreening(req.params.id);
  const filteredData = filterUpcomingScreenings(load);
  
  filteredData.length != 0 ?
  res.send(filteredData) :
  res.send("Inga kommande visningar")
})

app.get([
"/openingHours",
"/bistro-menu",
"/booking",
"/about",
"/giftCard",
"/matine",
"/newsletter",
"/premiereFriday",
"/ticket-info",
"/upcoming",
"/WholeProgramPage"],
 (req, res) => {
  res.render(req.url.slice(1));
});



app.use((req, res) => {
  res.status(404)
     .render("404");
});

export default app;