const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

console.log('PORT', process.env.PORT);

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));

