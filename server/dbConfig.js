const { MongoClient } = require('mongodb');

 const init = async () => {
    const uri = "mongodb+srv://post_itDB:postit@cluster0.2xgoc5b.mongodb.net/post_it?retryWrites=true&w=majority";
    let client = await MongoClient.connect(uri);
    console.log("Connected to databse");
    return client.db("post_it")
}
module.exports = { init };
