const express = require("express");
const app = express();
const port = 3000;
const path = require("path")

const filepath = path.join(__dirname, 'public')

// assign static folder
app.use(express.static(filepath))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
