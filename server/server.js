const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));

mongoose.connect(process.env.CONNECTION_STRING).then(() => console.log('MongoDB is Connected!'));

app.use("/user", require('./routes/userRouter'));
app.use('car', require('./routes/carModel'));