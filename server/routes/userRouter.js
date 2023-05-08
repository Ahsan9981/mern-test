const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const auth = require('../middleware/auth');
const generatePassword = require('../helpers/password-generator');


router.post('/sign-up', async (request, response) => {

    try {

        const { firstName, lastName, email } = request.body;

        if (!email || !firstName || !lastName) {
            return res.status(400).json({ msg: 'Not all fields have been entered' });
        }

        const isEmailExists = User.findOne({ email: email });

        if (isEmailExists) {
            return response.status(400).json({msg: 'An account already exists against this email address.'});
        }

        const password = generatePassword(12);
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email: email,
            password: passwordHash,
            firstName: firstName,
            lastName: lastName
        });

        const savedUser = await newUser.save();

        response.status(201).json({msg: 'User account created successfully'});
        
    } catch (error) {
        response.status(500).json({msg: error.message});
    }

});


router.post('/sign-in', auth, async (request, response) => {

});