import app from "./server.js";

const PORT = 8080 || process.env.PORT;
 
app.listen(PORT, () => {
    console.log("Server is listening on port: " + PORT);
  });