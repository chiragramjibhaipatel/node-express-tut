const express = require('express');
const path = require("path")
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./index.html"));
})

app.all("*", (req, res) => {
    res.status(404).send("Not Found");
});

app.listen(5000, () => {
    console.log("server is listening on 5000");
});
