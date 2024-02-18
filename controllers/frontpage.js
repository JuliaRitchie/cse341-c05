function createFrontPage(){
    try{
        return "Frontpage is working.";
    } catch(err){
        res.status(500).json(err);
    };
};

module.exports = {
    "createFrontPage": createFrontPage
};