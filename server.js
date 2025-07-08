//Init
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();

//Middleware
dotenv.config({ path: require('path').join(__dirname, '.env') });
app.use(express.static(path.join(__dirname, 'public')));
app.use('/src', express.static(path.join(__dirname, 'src')));

//Env
PORT = process.env.PORT || 3000;

//Main
app.listen(PORT);
console.log(`Server is running on http://localhost:${PORT}`);
console.log("Press Ctrl+C to stop the server.");