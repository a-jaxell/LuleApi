Detaljsidorna för respektive film ska visa en lista med alla kommande visningar.
Listan ska laddas in med hjälp av webbläsarens fetch() EFTER att sidan har visats
 , d.v.s. inte renderas på servern.

Endast kommande filmvisningar ska visas.
Ovanstående logik ska programmeras på servern,
och testas med hjälp av ett enhetstest och mockade datakällor


----------------------PBI's?-------------------------

# Script för induviduella filmsidan som fetchar vårat api och 

# js-script för att hämta alla kommande filmer från webservern
 :api https://plankton-app-xhkom.ondigitalocean.app/api/screenings?populate=movie

# skapa test enhetstest som kontrollerar att filmerna är en kommande visning " tex att dem har en start_time "


1. vi hämtar alla filmer till backend. Och plockar ut de filmer som ska visas på den sida vi är på. 
2. i anropet där vi hämtar hema alla screenings för den film som sidan ska ha.
Kan man i HTTP-anropet, när man hämtar hem alla screenings, ange någon url eller queryString för att enbart få hem screenings för en film med ett visst title name?

https://plankton-app-xhkom.ondigitalocean.app/api/screenings?populate=movie&filters[movie]=4

frontend -> 

När vi ska använda fetch() med webbläsaren. Ska vi då hämta kommande visningar från vår backend? Och om vi endast ska exponera det hämtade värdet. Ska vi då spara ner det hämtade värdet på en fil och sedan ge tillgång till det för frontEnd?


app.get("/upcoming/:id", async (req, res) => {
  const baseUrl = "https://plankton-app-xhkom.ondigitalocean.app/api/screenings"
  const cmsAPI = await fetch( baseUrl + "populate=movie&filters[movie]=" + req.params.id)
  const data = await cmsAPI.json();
  console.log(data);
   
});