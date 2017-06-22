// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5946c20981ad94f050d48cda')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to print todos', err);
  // });

  // db.collection('Todos').find({
  //   _id: new ObjectID('5946c20981ad94f050d48cda')
  // }).count().then((count) => {
  //   console.log('Todos');
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to print todos', err);
  // });

  db.collection('Users').find({name: 'Debayan Singha'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, null, 2));
  });

  db.close();
});
