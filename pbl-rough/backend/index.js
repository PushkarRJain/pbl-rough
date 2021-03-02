const express=require('express');
const app=express();

const dotenv=require('dotenv'); //to not write username and pass publically here.(store it in .env file)
dotenv.config();

const routesUrls=require('./routes/routes');
const cors=require('cors');

const mongoose=require('mongoose');
mongoose.connect(process.env.DATABASE_ACCESS,function(){
    console.log("Database connected successfully!");
});



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
extended:true
}));
app.use('/app',routesUrls);     //args: base path, route that's imported
app.listen(4000,function(){console.log("Server running at port 4000!");});