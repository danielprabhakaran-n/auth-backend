const user = require('../controller/user')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/testDb')
.then(() => console.log('Connected to mongoDB'))
.catch(err => console.log('Could not connect to MongoDB...', err))
















// const url = "mongodb://localhost:27017/";

// function dataStore(user) {
//     console.log('database')

//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("testDb");
//         dbo.collection("users").insertOne(user, function (err, res) {
//             if (err) throw err;
//             console.log("1 document inserted");
//             db.close();
//         });
//     });
// }
// module.exports = dataStore;