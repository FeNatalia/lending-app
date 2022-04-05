const crypto = require('crypto');
window.Buffer = window.Buffer || require('buffer').Buffer;

const algorithm = 'aes-256-ctr';

const secret_key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encrypt = text => {
  const cipher = crypto.createCipheriv(algorithm, secret_key, iv);

  let encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
};

const decrypt = hash => {
  const decipher = crypto.createDecipheriv(algorithm, secret_key, iv);

  let decrypted = decipher.update(hash, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');

  return decrypted;
};

module.exports = { encrypt, decrypt };
