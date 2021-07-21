const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs"); //telling app to use EJS as templating engine

const urlDatabase = {
  "b2xVn2": "http://www.happy.com",
  "9sm5xK": "http://www.google.com"
};

// josh jobs
const joshJobs = {
  "bars": ["stanley park brewpub", "the distillery", "The Fox Cabaret", "The old dirty bourbon"],
  "trades": ["growing city", "weeds", "northern touch"]
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/", (req, res) => {
  res.send("Hey hot stuff, want a date?");
});

app.get("/about", (req, res) => {
  res.send("<html><body>This is my about me page filled with all the interesting stories about josh <b>World</b></body></html>\n");
});

// page containing URLs
app.get("/urls", (req, res) => {
  const templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});


// page containing josh's resume, gonna make it look sexy AF
app.get("/resume", (req,res) => {
  const templateVars = {jobs: joshJobs};
  res.render("resume", templateVars)
});

app.get("/projects", ())