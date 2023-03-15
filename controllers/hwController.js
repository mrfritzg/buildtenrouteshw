//Load Data Models
const factslist = require('../models/factslist')
const baketballfacts = require('../models/basketballfacts')
const funfacts = require('../models/funfacts')
const oscarfacts = require('../models/oscarfacts')
const pokemonfacts = require('../models/pokemonfacts')
const starwarsfacts = require('../models/starwarsfacts')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = (req, res) => {
     
    // Looks in the views folder for "Index" and passes { factslist } data to the view (kind of like a server props object)
    res.render('Index', {factslist})
}

//BasketBall Index
module.exports.basketballIndex = (req, res) => {
     
    // Looks in the views folder for "BasketBallIndex" and passes { baketballfacts } data to the view (kind of like a server props object)

    //this contains basketball info from the facts list
    let basketBallInfo = factslist.findIndex((item) => item.name ==='basketballfacts')
    
    res.render('BasketBallIndex', {baketballfacts, factInfo: factslist[basketBallInfo]})
}

//BasketBall Show
module.exports.basketballShow = (req, res) => {
      res.render('BasketBallShow', { fact: baketballfacts[req.params.index] })
}

//Fun Facts Index
module.exports.funfactsIndex = (req, res) => {
     
    // Looks in the views folder for "BasketBallIndex" and passes { baketballfacts } data to the view (kind of like a server props object)

    //this contains basketball info from the facts list
    let funfactsInfo = factslist.findIndex((item) => item.name ==='funfacts')
    
    res.render('FunFactsIndex', {funfacts, factInfo: factslist[funfactsInfo]})
}

//Fun facts Show
module.exports.funfactsShow = (req, res) => {
      res.render('FunFactsShow', { fact: funfacts[req.params.index] })
}

//Oscar Facts Index
module.exports.oscarsIndex = (req, res) => {
     
    // Looks in the views folder for "BasketBallIndex" and passes { baketballfacts } data to the view (kind of like a server props object)

    //this contains basketball info from the facts list
    let oscarInfo = factslist.findIndex((item) => item.name ==='oscarfacts')
    
    res.render('OscarsIndex', {oscarfacts, factInfo: factslist[oscarInfo]})
}

//Oscar facts Show
module.exports.oscarsShow = (req, res) => {
      res.render('OscarsShow', { fact: oscarfacts[req.params.index] })
}

//Pokemon Facts Index
module.exports.pokemonIndex = (req, res) => {
     
    // Looks in the views folder for "BasketBallIndex" and passes { baketballfacts } data to the view (kind of like a server props object)

    //this contains basketball info from the facts list
    let pokemonInfo = factslist.findIndex((item) => item.name ==='pokemonfacts')
    
    res.render('PokemonIndex', {pokemonfacts, factInfo: factslist[pokemonInfo]})
}

//Pokemon Facts Show
module.exports.pokemonShow = (req, res) => {
      res.render('PokemonShow', { fact: pokemonfacts[req.params.index] })
}

//Starwars Facts Index
module.exports.starwarsIndex = (req, res) => {
     
    // Looks in the views folder for "BasketBallIndex" and passes { baketballfacts } data to the view (kind of like a server props object)

    //this contains basketball info from the facts list
    let starwarsInfo = factslist.findIndex((item) => item.name ==='starwarsfacts')
    
    res.render('StarwarsIndex', {starwarsfacts, factInfo: factslist[starwarsInfo]})
}

//Starwars Facts Show
module.exports.starwarsShow = (req, res) => {
      res.render('StarwarsShow', { fact: starwarsfacts[req.params.index] })
}