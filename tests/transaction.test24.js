const Transaction = require('../wallet/transaction');
const Wallet = require('../wallet/wallet');
const CryptUtil = require('../util/crypt');

describe('Transaction', () => {
    let transaction, senderWallet, recipient, amount;

    beforeEach( () => {
        senderWallet = new Wallet();
        recipient = 'recipient_publicKey';
        amount = 100;
        transaction = new Transaction({senderWallet, recipient, amount});
    });

    it('id has an `id`', () => {
        expect(transaction).toHaveProperty('id')
    });

    describe('outputMap', () => {
        it('has an `outputMap`', () => {
            expect(transaction).toHaveProperty('outputMap')
        });

        it('ouputs the amount to the recipient', () => {
            expect(transaction.outputMap[recipient]).toEqual(amount);
        });

        it('ouputs the remaining balance for the `senderWallet`', () => {
            expect(transaction.outputMap[senderWallet.publicKey])
            .toEqual(senderWallet.balance - amount);
        })
    });

    describe('input', () => {
        it('it has an `input`', () => {
            expect(transaction).toHaveProperty('input');
        });

        it('it has an `timestamp`', () => {
            expect(transaction.input).toHaveProperty('timestamp');
        });

        it('sets the amount to the `senderWallet` balance', () => {
            expect(transaction.input.amount).toEqual(senderWallet.balance);
        });

        it('sets the `address`to the senderWallet publicKey', () => {
            expect(transaction.input.address).toEqual(senderWallet.publicKey);
        });

        it('signs the `input`', () => {
            let sig = CryptUtil.sign({payload: transaction.outputMap, publicKey: senderWallet.publicKey})
            expect(
                CryptUtil.verify({
                    publicKey: senderWallet.publicKey,
                    nonce: sig.nonce,
                    signature: sig.signature
                  })
            ).toBe(true);
        });
    });

    describe('validTransaction()', () => {
        describe('when `transaction` is valid', () => {
            it('returns true', () => {
                expect(Transaction.validTransaction(transaction)).toEqual(true);
            })
        })
        describe('when `transaction` is invalid', () => {
            describe('and a`transaction` outputMap is invalid', () => {
                it('returns false', () => {
                    transaction.outputMap.recipient_publicKey = 999999999999;
                    expect(Transaction.validTransaction(transaction)).toEqual(false);
                })
            });

            describe('and a`transaction` input signature invalid', () => {
                
                it('returns false', () => {
                    transaction.input.signature.signature = 'FAKESIGNATURE';
                    expect(Transaction.validTransaction(transaction)).toEqual(false);
                })
            })
        })
    });


    
})