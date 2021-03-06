const fs = require('fs');

function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateName(name) {
    const re = /^[A-Za-z\s]+$/;
    return re.test(name);
}

function validatePassword(password) {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/;
    return re.test(password);
}

function readHTMLFile(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function(err, html) {
        if (err) {
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
}


module.exports = {
    validateEmail: validateEmail,
    randomString: randomString,
    validateName: validateName,
    validatePassword: validatePassword,
    readHTMLFile: readHTMLFile
};
