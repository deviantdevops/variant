const { v1: uuid } = require('uuid');
const Transaction = require('./transaction')

class TransactionPool {

    constructor(){
        this.transactionMap = {}
    }

    clear() {
        this.transactionMap = {};
    }
    /**
     * Add a transaction to the pool of work to do.
     * THis machine shall not mine its own transactions. Broadcast this 
     * to the other peers and let them do it after validation
     */
    setTransaction(transaction) {
        this.transactionMap[transaction.id] = transaction;
    }
    /**
     * Replace a local pool with an incoming pool 
     */
    setMap(transactionMap) {
        this.transactionMap = transactionMap;
    }
    /**
     * As a user will post very fast, we want to be sure that we filter the "double click"
     * users and not submit the same transaction twice. For this we want to check that there
     * is not a hash of the transaction already present in the pool as a wallet may have several 
     * transaction pending.
     */
    existingTransaction( hash ) {
        const transactions = Object.values(this.transactionMap);
        return transactions.find(transaction => transaction.input.content_hash === hash);
    }

    validTransactions() {
        return Object.values(this.transactionMap).filter(
            transaction => Transaction.validTransaction(transaction)
        );
    }

    clearBlockchainTransactions({ chain }) {
        for (let i=1; i<chain.length; i++) {
            const block = chain[i];
            for (let transaction of block.data) {
                if (this.transactionMap[transaction.id]) {
                    delete this.transactionMap[transaction.id];
                }
            }
        }
    }

    static syncPool(){

    }
}

class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new TransactionPool();
        }
    }
    getInstance() {
        return Singleton.instance;
    }
}

module.exports = Singleton;