const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://yesChefProject:yesyesyes@cluster0.8e71yf5.mongodb.net/yesChefProject?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected!");
    let fetched_data = mongoose.connection.db.collection("food_items");
    let data = await fetched_data.find({}).toArray();
    // console.log(data);
  } catch (error) {
    console.log("err: ", error);
  }
};

module.exports = connectToMongo;
