const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
require("dotenv").config();

//gives the connection path
const path = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_NAME}.j1ok1i1.mongodb.net/?retryWrites=true&w=majority`;

module.exports = async () => {

    //connecting Mongo database to the application

    const client = new MongoClient(path);
    await client.connect()
        .then(() => {
            console.log("\nConnected to MongoDB\n");
        })
        .catch((err) => {
            console.log("Error occured while connecting to database: " + err);
        });

    return client;
};