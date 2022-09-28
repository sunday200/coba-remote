const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
     nama : "sandy",
     kelas : 12
  })
})

app.get('/about', (req, res) => {
     res.send('Ini adalah halaman About')
   })

app.get('/contact', (req, res) => {
     res.send('Ini adalah halaman Contanct')
   })

app.get("/product/:id", (req, res) => {
     res.send("Product ID :" + req.params.id)
})

app.use('/', (req,res) =>{
     res.status(404)
     res.send("404")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})