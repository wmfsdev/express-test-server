const express = require("express");
const app = express();
const port = 3000;
const path = require("path")

const filepath = path.join(__dirname, 'public')

// assign static folder
app.use(express.static(filepath))


// non-static method, multiple gets

// app.get('/', (req, res) => {
//   res.sendFile(filepath + '/index.html')
// })

// app.get('/index.html', (req, res) => {
//   res.sendFile(filepath + '/index.html')
// })

// app.get('/contact.html', (req, res) => {
//   res.sendFile(filepath + '/contact.html')
// })

// app.get('/about.html', (req, res) => {
//   res.sendFile(filepath + '/about.html')
// })

// app.get('/404.html', (req, res) => {
//   res.sendFile(filepath + '/404.html')
// })

// app.get('/style.css', (req, res) => {
//   res.sendFile(filepath + '/style.css')
// })

// app.get('/script.js', (req, res) => {
//   res.sendFile(filepath + '/script.js')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
