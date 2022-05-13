const express = require('express');
const app = express();


const logger = (req, res, next) =>{
    const url = req.url;
    const method = req.method;
    const time = new Date().toTimeString();
    console.log(method, url, time);
    next();
}

app.get("/", logger, (req, res) => {
    res.send("Home");
});

app.get("/about",logger, (req, res) => {
    res.send("about");
});


app.listen(5000);
