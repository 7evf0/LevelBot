const mongoose = require("mongoose");
require("dotenv").config();

//gives the connection path
const path = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_NAME}.j1ok1i1.mongodb.net/?retryWrites=true&w=majority`;

module.exports = async () => {

    //connecting Mongo database to the application
    await mongoose.connect(path, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true
    })
    
    .then(() => {
        console.log("\nConnected to MongoDB\n");
    })
    .catch((err) => {
        console.log("Error occured while connecting to database: " + err);
    });

    return mongoose;
};