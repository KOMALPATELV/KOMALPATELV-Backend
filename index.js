//console.log("chai aur code and node");
require('dotenv').config()
const express = require ('express')
//import express from 'express';

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('komal patel')
  })

app.get('/login', (req, res) =>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur code</h2>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

