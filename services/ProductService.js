

const productModel = require("../models/ProductModel.js");

exports.getAllProducts = (req,res)=>{


    //show me all products (BY a specific category ) ( /users?cat=Smart Phones)
    if(req.query.cat)
    {
        productModel.find({category : req.query.cat}) 
        .then(products=>{
    
            res.json({
                message : `List all the Products by  ${req.query.cat}`,
                data : products,
                total: products.length
            })
        })
        .catch(err=>{
    
            res.status(500).json({
                message : `Error  ${err}`
            })
    
        })   

    }

    //show me all products (BY bestseller ) ( /users?bestseller=y)
    else if(req.query.bestseller)
    {
       
        let search;
        const value = req.query.bestseller;

        if(value === 'y')
        {
            search = true
        }

        else
        {
            search = false
        }
        

        productModel.find({isBestseller : search})  
        .then(products=>{
    
            res.json({
                message : `List of all Products`,
                data : products,
                total: products.length
            })
        })
        .catch(err=>{
    
            res.status(500).json({
                message : `Error  ${err}`
            })
    
        })   
    }

    //show me all PRODUCT (NO FILTER ) -no query string ( /users/)
    else
    {
        productModel.find()
        .then(products=>{
    
            res.json({
                message : `List of all Products`,
                data : products,
                total: products.length
            })
        })
        .catch(err=>{
    
            res.status(500).json({
                message : `Error  ${err}`
            })
    
        })   
    }


 
  
  
    
};


exports.getAProduct = (req,res)=>{

   
    productModel.findById(req.params.id) // 0 documents in the colle 
    .then(product=>{

        //A product was found based on the id given
        if(product)
        {

            res.json({
                message : `Product with ${req.params.id}`,
                data : product
            })

        }

        //product was not found based on the id given BUT the id provided ahered to the Object format of MongoDB
        else
        {
            res.stauts(404).json({
                message : `Product with ID : ${req.params.id} not found`,
            })

        }
    })
    .catch(err=>{

        res.status(500).json({
            message : `Error  ${err}`
        })

    })

};


exports.createAProduct = (req,res)=>{


    const newProduct  = req.body;
    
    const product = new productModel(newProduct);

    product.save()
    .then(product=>{

        res.json({
            message : `THe product was successfully created`,
            data : product
        })

    })
    .catch(err=>{

        res.status(500).json({
            message : `Error  ${err}`
        })

    })



};

exports.updateAProduct = (req,res)=>{



    //1. Lazy Way
    //2
    //3

    const updatedDate = req.body;
    productModel.findByIdAndUpdate(req.params.id,updatedDate,{new:true})
    .then(product=>{

        //product not null. ID found
        if(product)
        {

            res.json({
                message : `Product with id (${req.params.id}) was updated successfully `,
                data : product
            })

        }
        //product was null because the id was not found
        else
        {
            res.stauts(404).json({
                message : `Product with ID : ${req.params.id} not found`,
            })
        }

    })
    .catch(err=>{

        res.status(500).json({
            message : `Error  ${err}`
        })

    })


}

exports.deleteAProduct = (req,res)=>{

    productModel.findByIdAndRemove(req.params.id)
    .then(product=>{

        console.log(product)
        if(product)
        {
            res.json({
                message :`Product was deleted`
            })
        }

        else
        {
            res.status(404).json({
                message : `Product with ID ${req.params.id} not found`
            })
        }

    })
    .catch(err=>{

        res.status(500).json({
            message : `Error  ${err}`
        })

    })
}