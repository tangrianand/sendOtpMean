var express = require('express');
var router = express.Router();
  var client = require('twilio')(
  "AC07d4c475fa57d69a57b93e540952b6df",
  "7a7d1295d7a665c4e92a5700542f19bc"
);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendSMS/:contact', function(req, res) {
     var contact = req.params.contact;
     var num = Math.floor(Math.random() * 900000) + 100000;
     client.messages.create({
      from: '+12245719801',
      to: contact,
      body: 'Hi! Your OTP is: ' + num
      }, function(error, message) {
          if (!error) {
           console.log('Success! The SID for this SMS message is:');
           console.log(message.sid);
           console.log('Message sent on:');
           console.log(message.dateCreated);
           res.status(200).send();
    } else {
           res.status(400).send();
           console.log('Oops! There was an error.');
    }
     });
});


router.get('/smsList', function(req, res) {
      var smsList=[];
     client.messages.list(function(error, data) {
      if (!error) {
        data.forEach(function(message) {
        smsList.push({message:message.body,date:message.dateCreated,to:message.to});
      });
        res.status(200).send(smsList);
      } else {
           res.status(400).send();
           console.log('Oops! There was an error.');
      }
    });
});





   var contactList=[];
   contactList.push({id:1,firstname:'Aman',lastname:'Kumar',contact:'+919929997404'},
                    {id:2,firstname:'Aman',lastname:'Singh',contact:'+919929997404'},
                    {id:3,firstname:'Abhi',lastname:'Sharma',contact:'+919929987404'},
                    {id:4,firstname:'Kisan',lastname:'Kumar',contact:'+919971792703'});





  router.get('/getContactList', function(req, res) {

     res.send(contactList);
  });


module.exports = router;
