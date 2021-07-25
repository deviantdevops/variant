const { v1: uuid } = require('uuid');
const CryptUtil = require('../util/crypt');

class Transaction {

    constructor({senderWallet, recipient, amount, payload, outputMap, input}){
        this.id = uuid();
        this.pid = CryptUtil.hash(global.node.id);
        this.outputMap = outputMap || this.createOutputMap({senderWallet, recipient, amount});
        this.input = input || this.createInput({senderWallet, outputMap: this.outputMap, userPayload: payload});
        this.publicKey = senderWallet.publicKey
    }

    createOutputMap({senderWallet, recipient, amount}){
        const outputMap = {};
        outputMap[recipient] = amount;
        outputMap[senderWallet.publicKey] = senderWallet.balance - amount;
        return outputMap;
    }

    createInput({senderWallet, outputMap, userPayload}){
        return {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            type: userPayload.type || 'message',
            content: userPayload.content,
            content_hash: userPayload.hash || 0,
            signature: CryptUtil.sign({
              payload: {outputMap: outputMap, content: userPayload.content},
              publicKey: senderWallet.publicKey
            })
        }
    }

    static validTransaction(transaction){
        const {input: {address, amount, signature}, outputMap} = transaction;
        const outputTotal = Object.values(outputMap)
        .reduce((total, outputAmount) => total + outputAmount);
        if(amount !== outputTotal){
            console.error(`INVALID TRANSACTION from wallet: ${address}. Transaction amount ${amount} !== outputTotal ${outputTotal}`);
            return false;
        }
        if(!CryptUtil.verify({signature: signature.signature, nonce: signature.nonce, publicKey: transaction.publicKey})){
          console.error(`INVALID TRANSACTION from wallet: ${address}. Signature is invalid`);
          return false;
        }
        return true;
    }

    update({ senderWallet, recipient, amount, payload }) {
        if (amount > this.outputMap[senderWallet.publicKey]) {
          throw new Error('Amount exceeds balance');
        }
    
        if (!this.outputMap[recipient]) {
          this.outputMap[recipient] = amount;
        } else {
          this.outputMap[recipient] = this.outputMap[recipient] + amount;
        }
    
        this.outputMap[senderWallet.publicKey] =
          this.outputMap[senderWallet.publicKey] - amount;
    
        this.input = this.createInput({ senderWallet, outputMap: this.outputMap, userPayload: payload});
    }
    /**
     * Creates a transaction to reward a miner from the miner wallet
     * 
     */
    static rewardMiner({recipient}){
      const MINER_WALLET = {
        publicKey: '2e8b85a45b4ba30b110463fcc125677fea79a0da619bcc30da372935f5b1d717'
      } 
      const MINER_REWARD = 0.01;
      const MINER_REWARD_INPUT = {
          timestamp: Date.now(),
          amount: MINER_REWARD,
          type: "miner_reward",
          signature: CryptUtil.sign({
            payload: { [recipient.publicKey]: MINER_REWARD }, 
            publicKey: MINER_WALLET.publicKey
          })
      };
      let minerReward = new Transaction({
        senderWallet: MINER_WALLET,
        recipient,
        amount: MINER_REWARD, 
        outputMap: { [recipient.publicKey]: MINER_REWARD}, 
        input: MINER_REWARD_INPUT
      });

      return minerReward;

    }
    
}

module.exports = Transaction;