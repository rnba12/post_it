const { MongoClient } = require('mongodb');

async function main() {
    
    const uri = "mongodb+srv://post_itDB:postit@cluster0.2xgoc5b.mongodb.net/post_it?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);

    
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);
    
        // Close the connection to the MongoDB cluster
        await client.close()
}


main().catch(console.error);

// Add functions that make DB calls here
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};