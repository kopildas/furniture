import { MongoClient, ServerApiVersion } from'mongodb';
const uri = "mongodb+srv://kopi0D911:CIYvIjrndcugOFCm@clusterwoodhy.qenwdok.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Exporting individual collections
export const ProductsMongoDb = client.db("woodhyDB").collection("products");
export const ReviewDB = client.db("woodhyDB").collection("review");