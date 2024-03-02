const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes/index");
const mongodb = require('./db/connect');
const formSubmitRouter = require('./routes/formSubmit'); 

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/submit', formSubmitRouter); 

mongodb.initDb((err, db) => {
    if (err) {
        console.error(err);
    } else {
        app.listen(port, () => {
            console.log(`Connected to MongoDB successfully and listening on ${port}.`);
        });
    }
});
