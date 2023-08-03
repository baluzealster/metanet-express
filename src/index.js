// app.js
const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

//try to implement the crud operations  and try with the postman
// add nodemon to the project as well

// Middleware
//app.use(cors());
app.use(bodyParser.json());

const user={
    username:"metanet",
    pasword:"metanet@2023"
}

// Routes
app.get('/hello',(req,res)=>{
    res.send({
        success:true,
        message:"hello"
    })
});

app.post('/hello',(req,res)=>{
    res.send({
        success:true,
        message:"hello"
    })
});

app.put('/hello',(req,res)=>{
    res.send({
        success:true,
        message:"hello"
    })
});

app.delete('/hello',(req,res)=>{
    res.send({
        success:true,
        message:"hello"
    })
});


app.listen(PORT,()=>{
    console.log('app listening on ',PORT);
})

// Start the server and sync the database
