const express = require('express');
const app = express();
const {products} = require('./data');

app.get("/product/:id", (req, res) => {
    console.log("retrieve product");
    let productId = Number(req.params.id);
    if (productId) {
        let product = products.filter(p => p.id === productId);
        if (product.length !== 0) {
            res.json(product);
        } else {
            res.send("product not found");
        }
    } else {
        res.send("invalid product number");
    }
});

app.listen(5000);
