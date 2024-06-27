// import express
var express=require('express')
require('./connection');
const user = require('./model/user');
// 2:initilization
var app = express()

// middileware
app.use(express.json());
//  3.Api  endpoints were we can communicate with frond end and backend
     //  slash / -->is aport
    // app.get("path",(req,res)=>{}) 
app.get('/add',(req,res)=>{
    res.send("Hello Tomuuuz");
})

app.get('/login',(req,res)=>{
    res.send("You have successfully logged in");
})

app.post('/add',async(req,res)=>{
    try{
        console.log(req.body);
        await user(req.body).save()
        res.send({message:"data added succesfullly !!"})
    }catch (error){
        console.log(error)
    }
})

    // to view all the users ...[ user is the model of db ]
app.get('/view',async(req,res)=>{
    try {
        const data =await user.find();
        res.send(data);
    } catch (error) {
        console.log(error)
    }
})

// to delete any user
app.delete('/remove/:id',async(req,res)=>{
   try {
    var data = await user.findByIdAndDelete(req.params.id);
    res.send({message:"deleted"})
} catch (error) {
    console.log(error) 
}
})



// to update a user
app.put('/edit/:id',async(req,res)=>{
    try {
        var data =await user.findByIdAndUpdate(req.params.id,req.body);
        res.send({message:"Updated Succesfully",data})
    } catch (error) {
        console.log(error) 
    }
});


//  4. port allocation
app.listen(3000,()=>{
    console.log("port is up and running")
})

