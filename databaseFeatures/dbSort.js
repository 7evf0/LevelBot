const discord = require("discord.js")
const { MongoClient } = require("mongodb");
require("dotenv").config();

/**
 * 
 * @param {MongoClient} mongoClient 
 */

module.exports = async (mongoClient) => {

    const collection = mongoClient.db("LevelBotDatabase").collection("users");

    const arr = (await collection.find().sort("XP").toArray()).reverse();

    return arr;

};