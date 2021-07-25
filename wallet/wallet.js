const CryptUtil = require('../util/crypt');
const Transaction = require('./transaction');
const Config = require('../config')

class Wallet{

    constructor() {
        this.balance = 100;
        let keyPair = CryptUtil.create(); 
        this.publicKey = keyPair.publicKey;
    }

    getBalance(){


    }

    sign(data){
      return CryptUtil.sign(data, this.publicKey)
    }

    createTransaction({recipient, amount, payload}){

        if(amount > this.balance){
            throw new Error(`Amount exceeds your balance`)
        }
        return new Transaction({senderWallet: this, recipient, amount, payload});
    }

    static calculateBalance({ chain, address }) {
        let hasConductedTransaction = false;
        let outputsTotal = 0;
    
        for (let i=chain.length-1; i>0; i--) {
          const block = chain[i];
    
          for (let transaction of block.data) {
            if (transaction.input.address === address) {
              hasConductedTransaction = true;
            }
    
            const addressOutput = transaction.outputMap[address];
    
            if (addressOutput) {
              outputsTotal = outputsTotal + addressOutput;
            }
          }
    
          if (hasConductedTransaction) {
            break;
          }
        }
    
        return hasConductedTransaction ? outputsTotal :  outputsTotal;
      }

}

module.exports = Wallet;