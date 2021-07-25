const express = require('express');
const router = express.Router();
const Validate = require('validate.js');
const throttledQueue = require('throttled-queue');
const throttle = throttledQueue(1, 1000)

const Blockchain = require('../blockchain/blockchain');
const TransactionPool = require('../wallet/transaction_pool');
const Wallet = require('../wallet/wallet');
const Miner = require('../blockchain/miner');

const blockchain = new Blockchain().getInstance();
const transactionPool = new TransactionPool().getInstance();
const wallet = new Wallet();
const miner = new Miner().getInstance();


router.get('/', function(req, res, next) {
    global.mesh.broadcast(`Hello from Variant ${global.nodeid}`)
    return res.status(200).send('Variant Blockchain API').end();
});

router.get('/blocks', function(req, res, next) {
    return res.status(200).json(blockchain.chain()).end();
});

router.post('/mine', function(req, res, next) {
    let params = req.body;
    var constraints = {};
    Validate.async(params, constraints)
        .then( async (success) => {

            miner.mine();
            res.status(200).send('').end();
        })
        .catch((err) => {
            console.log(err.message)
            res.status(400).send(err.message).end();
        });

/** 

    blockchain.addBlock(req.body.data)
    .then(newBlock => {
        return res.status(200).json(newBlock).end();
    })
    **/
});

router.get('/pool', function(req, res, next) {
    let validTransactions = transactionPool.validTransactions()
    res.status(200).json(validTransactions).end();
})

router.post('/transaction', function(req, res, next) {
    
    let params = req.body;
    let transaction = transactionPool.existingTransaction(params.payload.hash)
    var constraints = {
        "amount": { presence: true, type: "number" },
        "recipient": { presence: true, type: "string" },
        "payload.type": { presence: true, type: "string"},
        "payload.content": { presence: true, type: "string"},
    };
    Validate.async(params, constraints)
        .then( async (success) => {
            if(!transaction){
                try{
                    transaction = wallet.createTransaction({
                        recipient: params.recipient,
                        amount: params.amount,
                        payload: params.payload
                    })
                    transactionPool.setTransaction(transaction);
                    global.node.broadcast.write(JSON.stringify({channel:'transaction', payload:transaction}))
                    return res.status(200).json({type:'success', transaction}).end();
                }catch(error){
                    return res.status(400).json({type: 'error 52', message: error.message}).end();
                }
            }else{
                try{
                    transaction.update({
                        senderWallet: wallet, 
                        recipient: params.recipient,
                        amount: params.amount,
                        payload: params.payload
                    })
                    return res.status(200).json({type:'success', transaction}).end();
                }catch(error){
                    return res.status(400).json({type: 'error 63', message: error.message}).end();
                }
            }
        })
        .catch((err) => {
            console.log(err.message)
            res.status(400).send(err.message).end();
        });
});

router.get('/wallet', function(req, res, next) {

    console.log(wallet)
    let params = req.query
    var constraints = {
        "address":{presence: true,type: "string"} 
    }
    Validate.async(params, constraints)
        .then( async (success) => {
            const address = params.address;
            res.status(200).json({
                address,
                balance: Wallet.calculateBalance({ chain: blockchain.chain, address })
            }).end();  
        })
        .catch(err => {
            console.log(err)
            return res.status(400).send(err);
        });
  
    
});




module.exports = router;