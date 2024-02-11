const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDb().db('cse341').collection('profiles').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };

const updateContact = async (req, res) => {
console.log("Console Log Worked")
const userId = new ObjectId(req.params.id);
const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    accountType: req.body.account
};
console.log(contact);
const response = await mongodb.getDb().db('cse341').collection('profiles').replaceOne({ _id: userId }, contact);
console.log(response);
if (response.modifiedCount > 0) {
    res.status(204).send();
} else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
}
};

module.exports = {getAll, updateContact};