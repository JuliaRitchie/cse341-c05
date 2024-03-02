const path = require('path');

function createFrontPage(req, res) {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

function createLoginPage(req, res){
    try {
        res.sendFile(path.join(__dirname, '../public/login.html'));
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

function createAccountPage(req, res){
    try {
        res.sendFile(path.join(__dirname, '../public/create.html'));
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    createFrontPage, createLoginPage, createAccountPage
};
