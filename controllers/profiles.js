const mongodb = require('../db/connect');
const objectId = require('mongodb').ObjectId;
const dataValidation = require('../util/dataValidation');

const getAll = async (req, res) => {
  try{
    const result = await mongodb.getDb().db('cse341').collection('profiles').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch(err){
    res.status(500).json(err);
  }
    
  };

  const create = (req, res) => {
    try {
      if (!req.body.email) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
      }
      // const email = req.body.email;
      // const emailCheck = dataValidation.passwordPass(password);
      // if (passwordCheck.error) {
      //   res.status(400).send({ message: passwordCheck.error });
      //   return;
      // }
      const user = new User(req.body);
      user
        .save()
        .then((data) => {
          console.log(data);
          res.status(201).send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || 'Some error occurred while creating the user.'
          });
        });
    } catch (err) {
      res.status(500).json(err);
    }
  };

const updateContact = async (req, res) => {
console.log("Console Log Worked")
const userId = new objectId(req.params.id);
const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    accountType: req.body.account
};
console.log(contact);
const response = await mongodb.getDb().db('cse341').collection('profiles').replaceOne({ _id: userId }, contact);
if (response.modifiedCount > 0) {
    res.status(204).send();
} else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
}
};

const deleteUser = async (req, res) => {
  try {
    const email = req.params.email;
    if (!email) {
      res.status(400).send({ message: 'Invalid Email Supplied' });
      return;
    }
    User.deleteOne({ username: username }, function (err, result) {
      if (err) {
        res.status(500).json(err || 'Some error occurred while deleting the profile.');
      } else {
        res.status(204).send(result);
      }
    });
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the contact.');
  }
};

module.exports = {getAll, updateContact, create, deleteUser};