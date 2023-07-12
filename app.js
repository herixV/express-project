const express= require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    //res.send("Hola, Express!");
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(8000, ()=> {
    console.log("server running on port", 8000 ,"WAZAAAA");
});