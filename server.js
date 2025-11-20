const express = require ('express');
const morgan = require('morgan');

//set up all variable in the .env file
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express ()

// console.log(process.env.PORT); //for testing/demo purpose


//===========Middleware======
app.use(morgan('dev'));
app.use(express.json());

//========Router===============

app.use('/api/user', require('./routes/userRouters'))


//use this rout to setup the API documentation
app.get('/', (req, res) => {
    res.send('Welcome to my API')
})







app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
    
})

