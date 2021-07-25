const CryptoJS = require('crypto-js');
const NACL = require('tweetnacl')
const UTIL = require('tweetnacl-util');

class Crypt {

    static hash (payload) {
        return CryptoJS.SHA384( JSON.stringify( payload) ).toString();
    }

    static create () {
        let keys = {};
        let pair = NACL.box.keyPair();
        keys.publicKey = `${global.config.ADDRESS_PREFIX}${this.byteArrayToHex(pair.publicKey)}`;
        keys.privateKey = `${global.config.ADDRESS_PREFIX}${this.byteArrayToHex(pair.secretKey)}`; 
        return keys;
    }

    static nonce(){
        return NACL.randomBytes(NACL.secretbox.nonceLength);
    }

    static sign({payload, publicKey}){
        if(typeof payload !== 'string'){
            payload = JSON.stringify(payload)
        }
        let result = {}, messageUint8, hash, nonce, key, signature; 
        try{
            messageUint8 = UTIL.decodeUTF8(payload);
            hash = NACL.hash(messageUint8);
            nonce = this.nonce();
            key = this.hexToByteArray(publicKey)
            signature = NACL.secretbox(hash, nonce, key)
        }catch(error){
            console.log(error)
        //    throw new Error(error)
        }
        result.signature = this.byteArrayToHex(signature)
        result.nonce = this.byteArrayToHex(nonce)
        return result;
    }

    static verify({signature, nonce, publicKey}){
        let valid = false;
        try{
            let nonceByte = this.hexToByteArray(nonce);
            let signatureByte = this.hexToByteArray(signature);
            let keyByte = this.hexToByteArray(publicKey);
            valid = NACL.secretbox.open(signatureByte, nonceByte, keyByte)
        }catch(error){
            return false;
        }
        
        if(valid !== false) return true;
        return false; 
    }

    static encrypt(payload, receiver_public_key, sender_private_key){
        let nonce = NACL.randomBytes(NACL.secretbox.nonceLength);
        let key = this.hexToByteArray(receiver_public_key);
        let secret = this.hexToByteArray(sender_private_key);
        let messageUint8 = UTIL.decodeUTF8(payload);
        let encrypted = NACL.box(messageUint8, nonce, key, secret);
        let encMessage = new Uint8Array(nonce.length + encrypted.length)
        encMessage.set(nonce);
        encMessage.set(encrypted, nonce.length);
        return UTIL.encodeBase64(encMessage);
    }

    static decrypt(emsg, receiver_private_key, sender_public_key){
        let msgDecoded = UTIL.decodeBase64(emsg)
        let nonce = msgDecoded.slice(0, NACL.box.nonceLength);
        let message = msgDecoded.slice(NACL.box.nonceLength, emsg.length);
        let key = this.hexToByteArray(receiver_private_key)
        let secret = this.hexToByteArray(sender_public_key)
        let decrypted = NACL.box.open(message, nonce, secret, key)
        if (!decrypted) {
            throw new Error('Could not decrypt message');
        }
        return UTIL.encodeUTF8(decrypted);  
    }

    static byteArrayToHex(byteArray) {
        return Array.prototype.map.call(byteArray, function(byte) {
          return ('0' + (byte & 0xFF).toString(16)).slice(-2);
        }).join('');
    }

    static hexToByteArray(hexString) {
        var result = [];
        if(hexString.substr(0,global.config.ADDRESS_PREFIX.length) === global.config.ADDRESS_PREFIX){
            hexString = hexString.substr(global.config.ADDRESS_PREFIX.length)
        }
        for (var i = 0; i < hexString.length; i += 2) {
            result.push(parseInt(hexString.substr(i, 2), 16));
        }
        return new Uint8Array(result);
    }

    static decodePublicKey(key){
        try {
            let k = UTIL.decodeBase64(key);
            if (k.length != NACL.box.publicKeyLength) {
                this.error('Bad public key length: must be ' + NACL.box.publicKeyLength + ' bytes');
                return null;
            }
            return k;
        } catch(e) {
            this.error('Failed to decode public key from Base64');
            return null;
        }
    }

    static decodeSecretKey(key){
        try {
            let k = UTIL.decodeBase64(key);
            if (k.length != NACL.box.secretKeyLength) {
                this.error('Bad secret key length: must be ' + NACL.box.secretKeyLength + ' bytes');
                return null;
            }
            return k;
        } catch(e) {
            this.error('Failed to decode secret key from Base64');
            return null;
        }
    }



}

module.exports = Crypt;