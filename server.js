const express = require("express");
const mongoose = require('mongoose');




if(process.env.NODE_ENV!="production")
{
    require('dotenv').config({path:"config/Keys.env"});
}


const productController = require("./controllers/ProductController.js")

const app = express();

//This middleware that will allow your API to parse incoming JSON data
app.use(express.json());


app.use("/products",productController);

const PORT = process.env.PORT;

app.listen(PORT,()=>{

    console.log(`Web Server is up and running on ${PORT}`)

    mongoose.connect(`${process.env.MONGO_DB_CONNECTION}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{

        console.log(`Connencted to the MongoDB`)
    })
    .catch(err=>{
        console.log(`Error happend : $${err}`)
    })

})