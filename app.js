const express = require('express');
const app = express();
const {products} = require('./data');

app.get("/product", (req, res) => {
    console.log(req.query);
    let search = req.query.search;
    let limit = req.query.limit;
    let filteredProducts = [...products];
    if (search) {
        filteredProducts = filteredProducts.filter(p => p.name.startsWith(search));
    }
    if (limit) {
        filteredProducts = filteredProducts.slice(0, Number(limit));
    }
    if (filteredProducts.length === 0) {
        res.send("no match");
    } else {
        res.json(filteredProducts);
    }
});

app.listen(5000);
