
const Block = require('./block');
const Blockchain = require('./blockchain');
const TransactionPool = require('../wallet/transaction_pool');
const Transaction = require('../wallet/transaction');
const CryptUtil = require('../util/crypt');


const blockchain = new Blockchain().getInstance();
const transactionPool = new TransactionPool().getInstance();





class Miner {

    constructor(){
        this.blockchain = blockchain.chain();
        this.wallet = global.wallet;
        this.transactionPool = [];
    }

    mine(){
        if(!global.node.connected){
            return;
        }
        console.log('MINING BLOCKS')
        const PID = CryptUtil.hash(global.node.id);




        //Get all valid transactions
        this.transactionPool = transactionPool.validTransactions()
    //    console.log('POOL',this.transactionPool)
        this.transactionPool.forEach( transaction => {
            /**
             * Not mining your own blocks
             */


console.log('TRANSACTION ',transaction)


            if(transaction.pid !== undefined && transaction.pid !== PID){
                let block = new Block({
                    payload: transaction
                })
                Block.mineBlock(block.payload)
                .then( results => {
                    console.log('BLOCK ', results)
                    //If the Chain is still valid, the reward this miner
                    let minerTransaction = Transaction.rewardMiner({
                        recipient: {publicKey: 'foobar'}
                    })
                    //Miner not getting rewarded for mining their own reward.
       //             global.node.broadcast.write(JSON.stringify({channel:'transaction', payload:minerTransaction}))
                })
                .catch(error => {
                    console.log('MINER ERROR 36', error)
                })
            }else{
                console.log('NOT MINING OWN BLOCK')
            }
        })
    }
}


class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Miner();
        }
    }
  
    getInstance() {
        return Singleton.instance;
    }
}

module.exports = Singleton;
