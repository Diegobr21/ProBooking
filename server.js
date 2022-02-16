const express = require('express');
const connectDB = require('./config/db')
const path = require('path')


const app = express();

// Connect database
connectDB();

//Comment for production
app.get('/', (req, res) => res.json({msg: 'Welcome to Booking System API'}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening in port ${PORT}`));

