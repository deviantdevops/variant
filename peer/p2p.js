const Stream = require('stream');
const smoke = require('smokesignal');
const Transaction = require('../wallet/transaction');
const TransactionPool = require('../wallet/transaction_pool');
const Blockchain = require('../blockchain/blockchain');
const Miner = require('../blockchain/miner');
const miner = new Miner().getInstance();

const transactionPool = new TransactionPool().getInstance();
const blockchain = new Blockchain().getInstance();

let node;

class MeshNetwork {

    constructor(port) {
        this.port = port;
        this.isSeeder = false;
        if(port === global.config.APP.PORT){
            this.isSeeder = true;
        }
        this.nodeid = 0;
        this.node = null;

    }

    connect() {
        return new Promise( (resolve, reject) => {
            console.log('Connecting to MESH Network')
            let nodeOptions = {
                port: this.port + 1,
                address: smoke.localIp('127.0.0.1'),
                seeds: [],
                minPeerNo: global.config.MESH.MINPEER,
                maxPeerNo: Infinity
            }

            if(this.port !== global.config.APP.PORT){
                //Not Node Main
                nodeOptions.seeds = global.config.MESH.SEEDERS
            }

            node = smoke.createNode(nodeOptions)
            node.on('connect', () => {
                this.nodeid = node.id;
                this.node = node;
                resolve( node );
            })

            const readableStream = Stream.Duplex.from(node.broadcast);
            readableStream.on('data', (chunk => this.handleMessage(chunk) ));
            node.start() 
            
        })
         
    }

    peers() {
        return this.node.peers.dump()
    }

    handleMessage(chunk) {

        let msg = null;
        try{
            msg = chunk.toString('utf8');
        }catch(error){
            //Do nothing
            console.log('BROADCAST MESSAGE INVALID 75')
        }
        if(msg !== null){
            try{
                msg = JSON.parse(msg)
            }catch(error){
                //Do nothing, not valid message
                //console.log(msg)
            }
            if(typeof msg === 'object' && msg.channel !== undefined){
                switch(msg.channel){
                    case 'pool':
                        /**
                         * Receiving a full TransactionPool
                         * update the current. Only need to receive once
                         */
                        if(!global.poolUpdated){
                            console.log('RECEIVING TRANSACTIONPOOL ')
                            let incomingPool = msg.payload;
                            incomingPool.forEach(transaction => {
                                if(Transaction.validTransaction(transaction)){
                                    transactionPool.setTransaction(transaction);
                                }
                            });
                            global.poolUpdated = true
                        }
                        return;
                    case 'transaction':
                        /**
                         * Receiving a transaction, add it to the pool IF
                         * there is not already a similar transaction in the blockchain
                         */
                        console.log('INCOMING TRANSACTION ')
                        let pool = transactionPool.validTransactions();
                        let poolArray = Object.values(pool);
                        let found = poolArray.find(transaction => transaction.id === msg.payload.id);
                        if(found === undefined && Transaction.validTransaction(msg.payload)){
                            console.log('VALID TRANSACTION')
                            transactionPool.setTransaction(msg.payload);
                            miner.mine();

                        }else{
                            console.log('TRANSACTION NOT VALID')
                        }
                        return;
                    case 'blockchain':
                        /**
                         * Receiving a blockchain sync. Evaluate and replace
                         * the current chain when valid.
                         */
                        return;
                    case 'block':
                        /**
                         * Receiving a block.
                         */
                         console.log('INCOMING NEW BLOCK', msg.payload)
                        return;
                    default:
                        return;

                }
            }
            
            



        }
        





    }

    /**
     * Might want a throttle here
     */
    broadcast(msg){
        if(global.mesh){
            node.broadcast.write(msg)
        }
        return;
    }

    
}


class Singleton {

    constructor(PORT) {
        if (!Singleton.instance) {
            Singleton.instance = new MeshNetwork(PORT);
        }
    }
  
    getInstance() {
        return Singleton.instance;
    }
}

module.exports = Singleton;