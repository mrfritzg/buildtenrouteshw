// Load Express
const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const hwController = require('../controllers/hwController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

//Route-1
// Setup an "index" route for funfacts, attach it to router along with the controller logic
router.get('/', hwController.index);

//Route-2
// Setup an "index" route for basketball facts, attach it to router along with the controller logic
router.get('/basketballfacts', hwController.basketballIndex);

//Route-3 Fun Facts Index
router.get('/funfacts', hwController.funfactsIndex);

//Route-4 Oscar Facts Index
router.get('/oscarfacts', hwController.oscarsIndex);

//Route-5 Pokemon Facts Index
router.get('/pokemonfacts', hwController.pokemonIndex);

//Route-6 Starwars Facts Index
router.get('/starwarsfacts', hwController.starwarsIndex);

//Route-7 BasketBall Show route
router.get('/basketballfacts/:index', hwController.basketballShow)

//Route-8 Fun Facts Show route
router.get('/funfacts/:index', hwController.funfactsShow)

//Route-9 Oscar Facts Show route
router.get('/oscarfacts/:index', hwController.oscarsShow)

//Route-10 Pokemon Facts Show route
router.get('/pokemonfacts/:index', hwController.pokemonShow)

//Route-11 Starwars Facts Show route
router.get('/starwarsfacts/:index', hwController.starwarsShow)

module.exports = router