const express = require('express');
const router = express.Router();
const Localisation = require('../models/Localisation');

router.get('/', function(req, res) {
    res.sendFile(__dirname + '../template/public/themes/add-listing.html ' );
});



router.post('/', function(req, res) {
    let newLocalisation = new Localisation({
        latitude:req.body.latitude,
        longitude:req.body.longitude
    });
    newLocalisation.save();
    Localisation.push({ latitude, longitude });
});


module.exports = router;


