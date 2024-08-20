
const cryptoLibrary = require('crypto');

const secret  = 'ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ';


const encrypt = (password) => {
    const identifier = Buffer.from(cryptoLibrary.randomBytes(16));
    const cipher = cryptoLibrary.createCipheriv('aes-256-ctr', Buffer.from(secret), identifier);


    const encryptedPassword = Buffer.concat([
        cipher.update(password),
        cipher.final(),
    ]);

    return {
        iv: identifier.toString("hex"), 
        password: encryptedPassword.toString("hex"),
    };

};

const decrypt = (encryption) => {
    const decipher = cryptoLibrary.createCipheriv(
        'aes-256-ctr',
        Buffer.from(secret),
        Buffer.from(encryption.iv, "hex")
    );

    const decryptedPassword = Buffer.concat([
        decipher.update(Buffer.from(encryption.password, "hex")), 
        decipher.final(),
    ]);

    return decryptedPassword.toString();

};


module.exports = {encrypt, decrypt};