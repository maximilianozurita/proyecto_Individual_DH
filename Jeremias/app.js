const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");
app.use( express.static(publicPath));


app.listen(3002,() =>
{
    console.log("Mercado liebre corriendo");
});

app.get("/",(req,res) =>
{
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
}); 