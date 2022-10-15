// Importing required pacakages;
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');


const app = express();


// Body Parser
app.use(express.json())


// Cors
app.use(cors());


// Port
const PORT = 5000;


// Router
app.use('/',router);


// Mongo URI
const URI = "mongodb+srv://quizapp:quizapp@cluster0.9gduo.mongodb.net/crud?retryWrites=true&w=majority";

mongoose.connect(URI).then(() => {
    app.listen(PORT , () => {
        console.log(`Server is running on ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
});