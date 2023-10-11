const express = require("express");
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  res.json({ contents: ["Hello", "I'm", "Nam"] });
});

app.listen(port, () => {
  console.log(`Server is listening port: ${port}`);
});
