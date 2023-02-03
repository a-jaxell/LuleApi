import app from "./server.js";
const PORT = 5080

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
  });