const express = require('express');
const app = express();
const loggerV1 = require('./logger_v1');
const loggerV2 = require('./logger_v2');
const authorize = require('./authorize');

app.use("/api/v1", [loggerV1, authorize]);
app.use("/api/v2", loggerV2);
app.use(express.urlencoded({extended: false}))
app.use(express.static("./methods-public"))

app.post("/login", (req, res) => {
    console.log("asd", req.body);
    res.send("hi");
});

app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/about",(req, res) => {
    res.send("about");
});

app.get("/api/v1/products", (req, res) => {
    res.send("v1 products");
});
app.get("/api/v1/items", (req, res) => {
    res.send("v1 items");
});

app.get("/api/v2/products", (req, res) => {
    res.send("v2 products");
});

app.listen(5000);
