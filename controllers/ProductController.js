const express = require('express')
const  router = express.Router()

// middleware that is specific to this router

// define the home page route


//GIVES ME ALL THE USERS
router.get('/',  (req, res) =>{
  res.json({
      message : "A list of all the users"
  })
})


//GIVES ME A USER
router.get('/:id',  (req, res) =>{
    res.json({
        message : "A list of all the users"
    })
  })
  
  


//CREATES A USER
router.post('/',  (req, res) =>{
    res.json({
        message : "A list of all the users"
    })
  })


  //UPDATES A USER
  router.put('/:id',  (req, res) =>{
    res.json({
        message : "A list of all the users"
    })
  })


  //DELETES A USER
  router.delete('/:id',  (req, res) =>{
    res.json({
        message : "A list of all the users"
    })
  })

module.exports = router;