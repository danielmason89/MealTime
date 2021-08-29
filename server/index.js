const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const recipes = require("./routers/Recipes");

dotenv.config();

// Express app
const app = express();

// Database
mongoose.connect(process.env.MONGODB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Successfully opened connection to Mongo!"));

// Defining middleware functions
const logging = (request, response, next) => {
  console.log(` ${request.method} ${response.url} ${Date.now()} `);
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

// using the middleware
app.use(cors);
app.use(express.json());
app.use(logging);

app.use(morgan("dev"));
app.use("/recipes", recipes);

// Routes, Configuring express instance
app
  .route("/")
  .get((req, res) => {
    res.status(200).json({ message: "I love coffee" });
  })
  .post((req, res) => {
    res.send("I love coffee too");
  })
  .post((request, response) => {
    response.json(request.body);
  });

// Starting server, executing the express (this must be last)
const port = process.env.PORT || 1989;
app.listen(port, () => console.log(`App running on port ${port}...`));
