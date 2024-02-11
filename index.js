const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes/index");
const mongodb = require('./db/connect');
app.use('/', express.json());
app.use('/', routes);

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to MongoDB successfully and listening on ${port}.`);
    }
  });