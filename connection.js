// importing mongoose

const mongoose  = require('mongoose');
mongoose.connect("mongodb+srv://annmariatomy:annmariatomy@cluster0.bewzojm.mongodb.net/OpenBatchDB1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('Connected to db')
})
.catch((error)=>{
    console.log('Catch Error')
})

