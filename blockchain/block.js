const CryptUtil = require('../util/crypt');
const CRPYTO = require('crypto');
const HexToBin = require('hex-to-binary');
const LMDB = require('../util/database');
let DB = new LMDB().getInstance();
const { v1: uuid } = require('uuid');

class Block {

    constructor({payload, hash}) {
        
        this.payload = payload;
    //    this.payload.id = uuid();
    //    this.hash = hash;

    }

    static genesis(){
        return DB.transactionGenesisBlock();
    }
    /**
     * Creates the initial block for the chain
     * @returns 
     */
    static getLastBlock(){
        return new Promise((resolve, reject) => {
            resolve(DB.transactionLastBlock())
        }).catch( err => {
            reject(err)
        })
    }

    /**
     * Appends new blocks to the chain
     * @todo add dynamic diffculty based on time between blocks and using MINE_RATE
     */
    static mineBlock ( payload ){
        console.log(`Mining Block`)
        return new Promise((resolve, reject) => {
            let hash;
            let lastBlock = DB.transactionLastBlock();
            //payload.id = uuid();
            do {
                payload.created_at = Date.now()
                payload.nonce = CRPYTO.randomBytes(16).toString('base64');
                payload.difficulty = Block.adjustDifficulty(payload, lastBlock);
                //console.log('DIFFICULTY: ', payload.difficulty)
                payload.lastHash = lastBlock.hash
                hash = CryptUtil.hash(payload, payload.difficulty, payload.nonce);
            }while( HexToBin(hash).substr(0, payload.difficulty) !== '0'.repeat(payload.difficulty))
            let block = {
                payload : payload,
                hash
            }
            //Broadcast the new block
            global.node.broadcast.write(JSON.stringify({channel:'block', payload:block}))
            resolve(DB.transactionPutBlock(block));
        })
        
      
    }
    /**
     * We want block to be mined at a constant rate. Evaluate the current time stamp - the lastBlock timestamp
     * and adjust accordingly
     */
    static adjustDifficulty( payload, lastBlock ) {
        //console.log('ADJUSTING DIFFICULTY')
        let diff;
        payload.difficulty = lastBlock.payload.difficulty || global.config.DIFFICULTY;
        if(( payload.created_at - lastBlock.payload.created_at ) < global.config.MINE_RATE ){
            //console.log('MINE RATE TOO FAST', payload.created_at - lastBlock.payload.created_at)
            diff = payload.difficulty + 1
            return diff;
        }
        if(( payload.created_at - lastBlock.payload.created_at ) > global.config.MINE_RATE ){
            //console.log('MINE RATE TOO SLOW', payload.created_at - lastBlock.payload.created_at)
            diff = payload.difficulty - 1
            return diff;
        }
        if( payload.difficulty === 0 ){
            //console.log('MINE RATE 0', payload.difficulty)
            return  global.config.DIFFICULTY;
        }
        
    }
   
}

module.exports = Block;