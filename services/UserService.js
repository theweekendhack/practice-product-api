

const userModel = require("../models/UserModel.js");


exports.getUserListing =(req,res)=>{


    userModel.find()  /*6000*/
    .then((users)=>{
        
        res.json({
            message : "A list of all the users in the database",
            data : users,
            total: users.length 
        })

      
    })
    .catch(err=>{

        res.status(500).json({
            message : `Error ${err}`,
        })  
    })
    


};


exports.addAUser=(req,res)=>{


    
    


    const data = req.body;

  
    req.body.profilePic = req.files.profilePic.name;

    const fileType =req.files.profilePic.mimetype;

    
    if( fileType.includes("image") )
    {
            console.log(`Yay, you upload an image`)

            req.files.profilePic.mv("assets/img/uploads")
            .then(()=>{
                console.log(`File Uploaded successfully!!!!!!`)
            })
            .catch(err=>console.log(`Error :${err}`))
    }
    else
    {
            console.log(`Sorry, you didn't upload an image.You can only upload (jpeg,gif,png)`)
    }

   

    /*
    const newUser = new userModel(data);

    newUser.save() //this will trigger a promise

    .then((user)=>{ 
       
        res.json({
            message: `The user was successfully created`,
            data : user
       
       
       
        })
    })
   .catch(err=>{

        res.status(500).json({
            message : `Error ${err}`,
        })  
    }) */



};



//GET /users/948
exports.getSingleUser = (req,res)=>{
   

    /*
        SElECT *
        FROM user
        where _id = req.params.id

    */

    userModel.findById(req.params.id)
    .then((user)=>{
        

        if(user)
        {
            res.json({
                message : `User with the id ${user._id}`,
                data : user 
            })
        }

        else
        {
            res.status(404).json({
                message  :`No user found with id, ${req.params.id}`
            })
        }


    })
    .catch(err=>{

        res.status(500).json({
            message : `Error ${err}`,
        })  
    })




};




exports.updateAUser = (req,res)=>{


};


exports.deleteAUser = (req,res)=>{


};


