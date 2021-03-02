const { response } = require('express');
const express=require('express');
const router=express.Router();
const registerTemplatecopy=require('../models/registermodel');   


router.post('/register',function(request,response){
    //when user is on this login page, enter email,pass then clicks submit, post request is made. That time, create a new instance of our schema'loginTemplate' using the info filled
    console.log(request.body);
    /*var list = Object.keys(request.body);
    var dict = list[0];
    //console.log(Object.keys(dict));
    var obj = JSON.parse(dict);
    var fin = Object.values(obj);
    console.log(fin[0],fin[1])
    //console.log(request.body.email);
    //console.log(request.body.password);*/
        
    let registerUser=new registerTemplatecopy({
        email:request.body.email,
        password:request.body.password
    });
    
    registerUser.save();
    response.send("<h1>Hello!</h1>");
    


});

module.exports=router;