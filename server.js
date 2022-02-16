const express = require ('express');

const app = express();

//Comment for production
app.get('/', (req, res) => res.json({msg: 'Welcome to Booking System API'}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening in port ${PORT}`));

