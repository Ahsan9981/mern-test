const { Schema, Model } = require('mongoose');

const carSchema = Schema({

    category: {type: String, required: true},
    color: { type: String,required: true},
    make: {type: String, required: true },
    registrationNo: { type: String, required: true}
});


const Car = new Model('car', carSchema);

module.exports = Car;