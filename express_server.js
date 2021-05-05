const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs"); //telling app to use EJS as templating engine

const urlDatabase = {
  "b2xVn2": "http://www.happy.com",
  "9sm5xK": "http://www.google.com"
};
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/", (req, res) => {
  res.send("Hey hot stuff, want a date?");
});

app.get("/about", (req, res) => {
  res.send("<html><body>This is my about me page filled with all the interesting stories about josh <b>World</b></body></html>\n");
});

