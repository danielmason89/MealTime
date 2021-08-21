const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// define middleware functions
const logging = (request, response, next) => {
  console.log(` ${request.method} ${request.url} ${Date.now()} `);
  next();
};

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

const recipesRoute = require("./routers/Recipes");

// using the middleware
app.use(cors);
app.use(express.json());
app.use(logging);
app.use(recipesRoute);

// Configuring express instance
app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app
  .route("/")
  .get((request, response) => {
    response.send(
      JSON.stringify({ message: "No GET routes on route URI" }),
      404
    );
  })
  .post((request, response) => {
    response.send(
      JSON.stringify({ message: "No POST routes on route URI" }),
      404
    );
  });

// executing the express (this must be last)
const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Listening on port ${port}`));
