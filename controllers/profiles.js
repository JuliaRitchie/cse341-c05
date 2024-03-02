const mongodb = require('../db/connect');
const objectId = require('mongodb').ObjectId;
const dataValidation = require('../util/dataValidation');
const User = require('../models/user'); 

const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('cse341').collection('profiles').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json(err);
  }  
};

const create = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = new User({
      firstName,
      lastName,
      email,
      password, // Remember to hash the password before saving it
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Some error occurred while creating the user.' });
  }
};

const updateContact = async (req, res) => {
  try {
    const userId = new objectId(req.params.id);
    const { firstName, lastName, email, accountType } = req.body;
    const contact = {
      firstName,
      lastName,
      email,
      accountType,
    };
    const response = await mongodb.getDb().db('cse341').collection('profiles').replaceOne({ _id: userId }, contact);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while updating the contact.');
  }
};

const deleteUser = async (req, res) => {
  try {
    const email = req.params.email;
    if (!email) {
      res.status(400).json({ message: 'Invalid Email Supplied' });
      return;
    }
    const result = await User.deleteOne({ email }); // Assuming you're using email to identify users
    if (result.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the contact.');
  }
};

module.exports = { getAll, updateContact, create, deleteUser };
