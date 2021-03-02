const mongoose=require('mongoose');

let registerTemplate=new mongoose.Schema({
    email:{
        type:String
        //required:true
       
    },
    password:{
        type:String
        //required:true

    },
    date:{  //not a part of frontend, just triggered and we know at what date this registration takes place.
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model('mytable',registerTemplate);   //args: db name,name of schema