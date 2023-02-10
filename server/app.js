import app from "./server.js";

const PORT = 5080 || process.env.PORT;
 
app.listen(PORT, () => {
    console.log("Server is listening on port: " + PORT);
  });