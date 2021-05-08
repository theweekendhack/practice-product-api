

exports.getAllProducts = (req,res)=>{

 
    res.json({
        message : "A list of all the users"
    })
    
};


exports.getAProduct = (req,res)=>{

    res.json({
        message : `A description of product with id ${req.params.id}`
    })

};


exports.createAProduct = (req,res)=>{

    res.json({
        message : "A list of all the users"
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