const Block = require("./block");
const CryptUtil = require('../util/crypt');
const { v1: uuid } = require('uuid');
const LMDB = require('../util/database');
let DB = new LMDB().getInstance();


class Blockchain {

    constructor() {
        DB.transactionGenesisBlock();
    }

    chain(){
        return DB.transactionChain();
    }
    
    addBlock( data ){
        return new Promise((resolve, reject) => {
            let payload = {};
            payload.data = data;
            const newBlock = Block.mineBlock(payload)
            resolve(newBlock); 
        })
        .catch(err => {
            console.log(err)
            reject(err);
        })
    }
    /**
     * Validate multiple aspects of this block chain
     * @param {*} chain 
     * @returns 
     */
    isValidChain(chain){
        /**
         * Is the GENESIS BLOCK VALID
         */
        let genesisBlockIsValid = CryptUtil.hash( chain[0].value.payload ) === CryptUtil.hash( global.config.GENESIS_BLOCK.payload );
        if(genesisBlockIsValid === false) {
            console.log(`GENESIS BLOCK INVALID`)
            return false;
        }
        /**
         * Are all Block lastHashes valid
         */
        for(let i = 1; i < chain.length; i++){
            if(chain[i].value.payload.lastHash !== chain[i - 1].value.hash) {
                console.log(`BLOCK ${i} LASTHASH INVALID`)
                return false
            }
        }
        /**
         * Are all Block hashes valid
         */
        for(let i = 1; i < chain.length; i++){
            let actualHash = chain[i].value.hash;
            let calculatedHash = CryptUtil.hash( chain[i].value.payload );
            if( actualHash !== calculatedHash ){
                console.error(`BLOCK ${i} IS INVALID. The calculated hash of the payload does not equal the hash recorded.`)
                return false;
            }
        }
        console.log(`BLOCK CHAIN IS VALID`)
        return true
    }
    /**
     * Replace the chain with a provided chain
     * @param {*} chain 
     * @returns 
     */
    replaceChain(chain){
        //Is chain longer than original
        let currentChain = DB.transactionChain()

console.log('CURRENT CHAIN', currentChain.length)
console.log('NEW CHAIN', chain.length)



        if(chain.length <= currentChain.length){
            console.error('NEW CHAIN IS SAME LENGTH OR LESS THAN ORIGINAL. NOT REPLACING');
            return;
        }
        //Is the new chain valid
        if(this.isValidChain(chain) === false){
            console.error('NEW CHAIN IS INVALID. NOT REPLACING');
            return;
        }
        //All good, so replace chain
        console.info('SUCCESS!! ORIGINAL CHAIN IS REPLACED WITH NEWCHAIN');
        for(let i = 1; i < chain.length; i++){
            DB.transactionPutBlock(chain[i].value)
        }
        this.chain = chain;
        console.log(`Current Chain Length = ${this.chain.length}`)
  //      return;
    }

}

class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Blockchain();
        }
    }
  
    getInstance() {
        return Singleton.instance;
    }
}

module.exports = Singleton;