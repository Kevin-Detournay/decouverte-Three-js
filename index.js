require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.static('./public'))

const port = process.env.PORT || 3000;

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});