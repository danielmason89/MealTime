const express = require("express");
const app = express();

app.route("/").get((req, res) => {
  res.status(200).json({ message: "I love coffee" });
});

app.post("/", (req, res) => {
  res.send("You can post to this endpoint...");
});

const port = 1989;
app.listen(port, () => console.log(`App running on port ${port}...`));

// app.route("/posts/:id").get((req, res) => {
//   // express adds a "params" Object to requests
//   const id = request.params.id;
//   // handle GET request for post with an id of "id"
// });

// const logging = (req, res, next) => {
//   console.log(`${req.method} ${req.url} ${Date.now()}`);
//   next();
// };

// app.use(logging);
