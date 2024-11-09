const express = require("express");
const port = 8888;
const app = express();

app.get("/", (req, resp) => {
  resp.send("Hello world");
});
app.get("/mylove", (_, resp) => {});
app.listen(port, () => {
  console.log(`Successfully rendering on ${port}`);
});
