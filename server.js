//Init
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

//Middleware
app.use(express.static(path.join(__dirname, 'public')));

//Env
dotenv.config({ path: require('path').join(__dirname, '.env') });
PORT = process.env.PORT || 3000;

//Api Endpoints

//Main
app.listen(PORT);
console.log(`Server is running on http://localhost:${PORT}`);
console.log("Press Ctrl+C to stop the server.");