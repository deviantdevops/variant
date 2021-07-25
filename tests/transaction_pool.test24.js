const TransactionPool = require('../wallet/transaction_pool.js');
const Transaction = require('../wallet/transaction');
const Wallet = require('../wallet/wallet');
const Blockchain = require('../blockchain/blockchain');

describe('TransactionPool', () => {

    let transactionPool, transaction, senderWallet;

    beforeEach(() => {
        transactionPool = new TransactionPool();
        senderWallet = new Wallet();
        transaction = new Transaction({
            senderWallet,
            recipient: 'fake-recipient',
            amount: 50
        });
    });

    describe('setTransaction()', () => {

console.log(`SETTING TRANACTION`, transaction)



        it('adds a transaction', () => {
            transactionPool.setTransaction(transaction);
            expect(transactionPool.transactionMap[transaction.id])
            .toBe(transaction);
        })
    });

    describe('existingTransaction()', () => {
        it('returns an existing transaction given an input address', () => {
          transactionPool.setTransaction(transaction);
    
          console.log(senderWallet.publicKey)
          expect(
            transactionPool.existingTransaction({ inputAddress: senderWallet.publicKey })
          ).toBe(transaction);
        });
      });


})