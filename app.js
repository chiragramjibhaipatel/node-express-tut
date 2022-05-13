const express = require('express');
const {products} = require('./data');
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1><a href='/get-products/1/55'>products</a>")

});

app.get("/get-products/:id/:something", (req, res) => {
    console.log("id: ", req.params)
    let productId = Number(req.params.id);
    let newProducts = products.filter(p => p.id === productId);
    res.json(newProducts);
});

app.listen(5000);
