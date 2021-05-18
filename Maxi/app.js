const express=require("express");
const app=express();
const path=require("path");

app.listen(3030,()=>{
    console.log("Servidor ejecutado");
});


//Lo que esta en la carpeta public sera usado.
const publicPath=path.resolve(__dirname + "/public");


//Utilizar la carpeta y todas sus cosas de manera estatica (establece como raiz de todos los directorios)
app.use(express.static(publicPath));

//-----------------------------
app.get ("/register",(req,res)=>{res.sendFile(path.resolve(__dirname, "./views/register.html"))})
app.get ("/login",(req,res)=>{res.sendFile(path.resolve(__dirname, "./views/login.html"))})
//permite dar una ruta absoluta
app.get ("/",(req,res)=>{res.sendFile(path.resolve(__dirname, "./views/home.html"))})


