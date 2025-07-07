const dotenv = require('dotenv');

PORT = process.env.PORT || 3000;
dotenv.config({ path: require('path').join(__dirname, '.env') });

console.log("Server is running on Port ", {PORT});