const { MongoClient } = require('mongodb');

 const init = async () => {
    const uri = process.env.DB_URL;
    const dbName = process.env.DB_NAME
    let client = await MongoClient.connect(uri);
    return client.db(dbName);
}
module.exports = { init };
