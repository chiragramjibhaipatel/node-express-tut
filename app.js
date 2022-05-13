const express = require('express');
const path = require("path")
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./index.html"));
})

app.listen(5000, () => {
    console.log("server is listening on 5000");

});
