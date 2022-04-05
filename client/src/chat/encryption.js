const crypto = require('crypto');
window.Buffer = window.Buffer || require('buffer').Buffer;

const algorithm = 'aes-256-ctr';

const secret_key = 'uI2ooxtwHeI6q69PS98fx9SWVGbpQohO';
const iv = crypto.randomBytes(16);

export const encrypt = text => {
  const cipher = crypto.createCipheriv(algorithm, secret_key, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex'),
  };
};

export const decrypt = hash => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    secret_key,
    Buffer.from(hash.iv, 'hex'),
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, 'hex')),
    decipher.final(),
  ]);

  return decrpyted.toString();
};
