Run a simple weight-tracker app server.

//create a .env file with he entries
DB_PATH=./public/store.json
TOKEN_SECRET=YOUR_SECRET

HOW TO OBTAIN 'YOUR_SECRET'
//run require('crypto').randomBytes(64).toString('hex') in a node.js env
