

const productModel = require("../models/ProductModel.js");

exports.getAllProducts = (req,res)=>{

 
    productModel.find() // 0 documents in the colle 
    .then(products=>{

        res.json({
            message : `List of all Products`,
            data : products
        })
    })
    .catch(err=>{

        res.status(500).json({
            message : `Error  ${err}`
        })

    })
  
    
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

    res.json({
        message : `Update product with id ${req.params.id}`
    })
}

exports.deleteAProduct = (req,res)=>{

    res.json({
        message : `Delete product with id ${req.params.id}`
    })
}