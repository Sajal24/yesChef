const mongoose = require("mongoose");
const mongoURI =
  "mongodb://yesChefProject:yesyesyes@ac-00moskh-shard-00-00.8e71yf5.mongodb.net:27017,ac-00moskh-shard-00-01.8e71yf5.mongodb.net:27017,ac-00moskh-shard-00-02.8e71yf5.mongodb.net:27017/?ssl=true&replicaSet=atlas-zkijqd-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("connected");
};

module.exports = connectToMongo;
