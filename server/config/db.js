const mongoose = require("mongoose")

const connectDB = async()=>{
    return mongoose.connect("mongodb+srv://niteesh:SM3xbfo3JQjwUInd@cluster0.hejiv9s.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{console.log("database Connected succesfully")})
    .catch(err=>
        {   console.log("could not connect to database \n")
            console.log(err)
        });
}

module.exports = connectDB;