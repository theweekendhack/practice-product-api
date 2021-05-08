const express = require("express");

const productController = require("./controllers/ProductController.js")


const app = express();


app.use("/users",productController);


const PORT = 3000;


app.listen(PORT,()=>{
    console.log(`Web Servere is up and running on ${PORT}`)
})