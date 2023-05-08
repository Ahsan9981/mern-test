const crypto = require('crypto');

const generatePassword = (length) => {

    const buffer = crypto.randomBytes(length);
    let password = '';

    for (let i = 0; i < buffer.length; i++) {
        const byte = buffer[i];
        const index = byte % process.env.PASSWORD_GENERATOR_STRING;
        password += characters.charAt(index);
    }

    return password;
}

module.exports = generatePassword;