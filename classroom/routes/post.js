const express = require("express");
const router = express.Router();


//post
//index 
router.get("/",(req,res)=>{
    res.send("get for post");
})

//show 
router.get("/:id",(req,res)=>{
    res.send("get for  post id");
})

//post 
router.post("/",(req,res)=>{
    res.send("POST for post");
})

//DELETE 
router.delete("/:id",(req,res)=>{
    res.send("delete for post id");
})

module.exports = router;