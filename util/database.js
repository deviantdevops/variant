const { open } = require('lmdb');
const { v1: uuid } = require('uuid');
const CONFIG = require('../config');

//const rootStore = open( global.config.DB.LMDB );
const store = open(global.config.DB.LMDB)
const messageStore = store.openDB( 'messages' );
const transactionStore = store.openDB( 'transactions' );

class DB {

    constructor(){}

    transactionGenesisBlock(){
        console.log('Setting GENESIS Block')
        transactionStore.ifNoExists('genesis', () => {
            transactionStore.put('genesis', global.config.GENESIS_BLOCK );
        })
        return global.config.GENESIS_BLOCK;
    }

    transactionBlockCount(){
        var arr = Array.from(transactionStore.getRange());
        return arr.length;
    }

    transactionPutBlock(block){
        try{
            transactionStore.put(block.payload.id, block );
            return block;
        }catch(error){
            console.error('DATABASE ERROR 20:', error);
            return error;
        }  
    }
    /**
     * 
     * @returns last Block
     */
    transactionLastBlock(){
        var arr = Array.from(transactionStore.getRange());
        arr.sort((a, b) => a.value.payload.created_at < b.value.payload.created_at && 1 || -1)
        return arr[0].value;
    }

    transactionChain(){
        var arr = Array.from(transactionStore.getRange());
        arr.sort((a, b) => a.value.payload.created_at < b.value.payload.created_at && -1 || 1)
        return arr;
    }
    /**
     * Get all Transactions in the DB for a specific wallet
     * @param {*} address 
     * @returns Array sorted newest -> oldest by created_at
     */
    getWalletTransactions(address){
        var arr = Array.from(transactionStore.getRange());
        arr
        .filter( transaction => transaction.key === address)
        .sort((a, b) => a.value.payload.created_at < b.value.payload.created_at && 1 || -1) //newest -> oldest
        return arr; 
    }
}

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new DB();
        }
    }
    getInstance() {
        return Singleton.instance;
    }

}

module.exports = Singleton;