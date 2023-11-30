const express = require('express');
const router = express.Router();
const db = require('../models');
const { faker } = require('@faker-js/faker');
const path = require('path');
const {Tourist} = require('../models');

router.get('/', (req, res) => {

  res.render('tourists/index')


})


// POST /accounts x
// PUT /accounts/:accountNumber
// DELETE /accounts/:accountNumber



// GET /accounts X
router.get('/', (req, res) => {


  return res.render('tourists/index.ejs', {});
});




router.get('/new', (req, res) => {
  return res.render('tourists/new.ejs');
});

// GET /tourists/:tourist_id
router.get('/check/:tourist_id', async (req, res) => {

  const touristId = req.params.tourist_id
  console.log('testing testing');
  const response = await Tourist.findAll()
  console.log(response);
});






router.get('/edit/:tourist_id', (req, res) => {
  db.tourist.findOne()
    .then(tourists => {
      const parsedTourists = tourists.map(a => a.toJSON());
      // iterate through the array and check each tourist
      // match that tourist_id with req.params.tourist_id    
      for (let i = 0; i < parsedTourists.length; i++) {
        let tourist = parsedTourists[i];
        if (tourist.id === req.params.tourist_id) {
          return res.render('tourists/edit.ejs', { tourist: tourist });
        }
      }
    })
    .catch(error => {
      if (error) {
        console.log('---- error ----', error);
        return res.status(404).json({ message: 'Tourist cannot be found.' })
      }
    });
});

// POST /accounts x

router.post('/', (req, res) => {
  // print the data that the user submits
  console.log(req.body);

  // create a new tourist
  let newTourist = new Tourist(
    faker.person.fullName(),
    faker.person.bio(),
    faker.word.words(),
    faker.location.country(),
    faker.number.int({ min: 10, max: 100 }),
  )
  // print the newTourist
  console.log('new tourist', newTourist);
  fs.readFile('./data/tourists.json', 'utf8', (error, data) => {
    if (error) {
      return res.json({ message: 'Error occured. Please try again' });
    } else {
      data = JSON.parse(data); // array
      let index = data.length;
      newTourist.id = index; // the new tourist  has an id now.
      data.push(newTourist);
      let stringData = JSON.stringify(data);
      // write the data to the file
      fs.writeFile('./data/tourists.json', stringData, 'utf8', (error, result) => {
        return res.redirect(`/tourists/${newTourist.full_name}`);
      })

    }
  })
});



router.put('/:user_id', (req, res) => {
  // how would I print the user_id
  console.log('to view user id', req.params.user_id);
  // -------------------------------------------
  console.log('body', req.body); // data that we want to update
  // -------------------------------------------
  // find the tourist  with the user_id
  // grab the tourist by user_id and update
  let updatedTourist = {};
  fs.readFile('./data/tourists.json', 'utf8', (error, data) => {
    if (error) {
      return res.json({ message: 'Error occured. Please try again...' });
    } else {
      data = JSON.parse(data); // array of objects(tourist)
      // use map to iterate through and update the fields
      newData = data.map((tourist) => {
        // check to see if the account number is the same.
        if (tourists.user_id === req.params.user_id) {
          // change the data
          tourist.full_name = req.body.full_name || tourist.full_name;
          tourist.biography = req.body.biography || tourist.biography;
          tourist.interests = req.body.interests || tourist.interests;
          tourist.country = req.body.country || tourist.country;
          tourist.age = Number(req.body.age || tourist.age);

          // if there is a pin to change, then it will update

          updatedTourist = { ...tourist };
          return updatedTourist;
        } else {
          return tourist;
        }
      });

      // write the new array of objects inside of the tourists.json file
      fs.writeFile('./data/tourists.json', JSON.stringify(newData), 'utf8', (error, result) => {
        // respond with the updated tourist information
        // return res.json({ tourist: updatedTourist });
        return res.redirect(`/tourists/${req.params.user_id}`);
      })
    }
  })
})

router.delete('/:user_id', (req, res) => {
  // how would I print the user_id
  console.log('to view user_id', req.params.user_id);
  // find the tourist with the user_id
  // grab the tourist  by user_id and update
  const { user_id } = req.params;
  fs.readFile('./data/tourists.json', 'utf8', (error, data) => {
    if (error) {
      return res.json({ message: 'Error occured. Please try again...' });
    } else {
      data = JSON.parse(data); // array of objects(tourist)
      // use map to iterate through and update the fields
      const newData = data.filter(account => account.accountNumber !== accountNumber);
      // write the new array of objects inside of the tourists.json file
      fs.writeFile('./data/tourists.json', JSON.stringify(newData), 'utf8', (error, result) => {
        // respond with the updated tourist  information
        if (newData.length !== data.length) {
          //   return res.json({ message: `Tourist with user_id ${user_id} deleted successfully` });
          return res.redirect('/tourists');
        } else {
          return res.status(404).json({ message: 'Tourist does not exist' })
        }
      })
    }
  })
});


module.exports = router;