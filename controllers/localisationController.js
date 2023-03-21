const express = require('express');
const router = express.Router();
router.use(express.json());

const Localisation = require('../models/Localisation');




router.get('/', function(req, res) {
    res.sendFile(__dirname + '../template/public/themes/add-listing.html ' );
});



router.post('/', function(req, res) {
    
    let newLocalisation = new Localisation({
      latitude: req.body.latitude,
      longitude: req.body.longitude
    });
    
    newLocalisation.save(function(err, localisation) {
      if (err) {
        console.log(err);
        res.status(500).send("Error saving localisation data");
      } else {
        console.log("Localisation data saved successfully");
        res.status(200).send(localisation);
      }
    });
  });


module.exports = router;


