const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const mongoURI = "mongodb://127.0.0.1:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = async ()=>{
    mongoose.connect(mongoURI)
    const connection = mongoose.connection;
    connection.on("connected" , ()=>{
    console.log("successfully connected to DB")
    })
    
    connection.on("error" , ()=>{
        console.log("something went wrong")
    })
}

module.exports = connectToMongo;

