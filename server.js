// Load express
const express = require('express');

//create our express app
const app = express();

//create a port
const PORT = 3004;

//Load our Routes
//hw
const hwRoutes = require('./routes/hwRoutes');

// npm install jsx-view-engine react react-dom
const {createEngine} = require('jsx-view-engine');

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

//Connect our hw routes to our express app
app.use('/', hwRoutes);

//the to the listen port
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})