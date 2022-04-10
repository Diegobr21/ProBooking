const express = require('express');
//const connectDB = require('./config/db')
//const path = require('path')


const app = express();

// Connect database
//connectDB();

//Comment for production
//app.get('/', (req, res) => res.json({msg: 'Welcome to Booking System API'}));

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/locations', require('./routes/locations'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening in port ${PORT}`));

