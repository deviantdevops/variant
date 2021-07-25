const Blockchain = require('../blockchain/blockchain');
const Block = require('../blockchain/block');
const CONFIG = require('../config');

let blockchain, newChain, originalChain;
describe('Blockchain', () => {
    let blockchain = new Blockchain().getInstance();

    /**
    it('contains a `chain` Array instance', () => {
        expect(blockchain.chain() instanceof Array).toBe(true);
    })

    it('starts with the Genesis block', () => {
        let chain = blockchain.chain();
        expect(chain[0].value).toEqual(Block.genesis())
    })

    it('adds a new block to the chain', () => {
        const data = {currency: "vrnt24", amount: 0};
        blockchain.addBlock(data);
        let chain = blockchain.chain();
        setTimeout( () => {
            expect(JSON.stringify(chain[ chain.length - 1 ].value.payload.data)).toEqual(JSON.stringify(data));
        }, 1000)
    })

 
    describe('isValidChain', () => {

        beforeEach(() => {
            let blockchain = new Blockchain().getInstance();
            blockchain.addBlock({currency: 'BTC'});
            blockchain.addBlock({currency: 'XRP'});
            blockchain.addBlock({currency: 'XLM'});
    
            originalChain = blockchain.chain();
            newChain = new Blockchain().getInstance();
        })
        
     
        describe('does not start with the Genesis block', () => {
            let blockchain = new Blockchain().getInstance();
            let chain = blockchain.chain();
            it('returns false', () => {
                chain[0].value.payload = {data:{GENESIS: false}};
                chain[0].value.hash = 'bla-hash';
                setTimeout(() => {
                    expect(blockchain.isValidChain(blockchain.chain())).toBe(false);
                }, 1000)
            });
        });
     
        describe('does start with the Genesis block && has length > 1', () => {
            
            describe('a lastHash is not valid', () => {
                it('returns false', () => {
                    let blockchain = new Blockchain().getInstance();
                    let chain = blockchain.chain();
                    chain[2].value.payload.lastHash = 'broken-hash';
                    setTimeout(() => {
                        expect(blockchain.isValidChain(blockchain.chain())).toBe(false);
                    }, 1000)
                });
            });
     
            describe('a block.hash is not valid', () => {
                it('returns false', () => {
                    let blockchain = new Blockchain().getInstance();
                    let chain = blockchain.chain();
                    blockchain.addBlock({currency: 'BTC'});
                    blockchain.addBlock({currency: 'XRP'});
                    blockchain.addBlock({currency: 'XLM'});
                    chain[2].value.payload.data = 'evil data';
                    setTimeout(() => {
                        expect(blockchain.isValidChain(blockchain.chain())).toBe(false);
                    }, 1000)
                });
            });
    
            describe('chain does not have any invalid blocks', () => {
                it('returns true', () => {
                    let blockchain = new Blockchain().getInstance();
                    let chain = blockchain.chain();
                    blockchain.addBlock({currency: 'BTC'});
                    blockchain.addBlock({currency: 'XRP'});
                    blockchain.addBlock({currency: 'XLM'});
                    setTimeout(() => {
                        expect(blockchain.isValidChain( blockchain.chain() )).toBe(true);
    
                    }, 1000)
                });
            });
           
            
        });
     
    })
    
    **/
    describe('replaceChain()', () => {
    
        describe('new chain is not longer than original', () => {
            it('does not replace the chain', () => {
    
                let blockchain = new Blockchain().getInstance();
      //          blockchain.addBlock({currency: 'BTC'});
       //         blockchain.addBlock({currency: 'XRP'});
       //         blockchain.addBlock({currency: 'XLM'});
                let originalChain = blockchain.chain()
                let newChain = [
                    {
                      key: 'genesis',
                      value: {
                        payload: [Object],
                        hash: '0cd857aca2b81652b8c4df598f2dd11d416b45aa411e36ff0b9f0fdad3ef934913acc279f1fa7c44c1d45646442be389'
                      }
                    },
                    {
                      key: '6ec946d0-dedf-11eb-8030-c5d17a4bdec3',
                      value: {
                        payload: [Object],
                        hash: '0001277d07b85e33d82f66b9d9be44d482f2785bd09afe6b6c2e4c39cf2255b0ef5f5fc77205373be7cf9f6aaf372f02'
                      }
                    },
                    {
                      key: '6ed99a80-dedf-11eb-8030-c5d17a4bdec3',
                      value: {
                        payload: [Object],
                        hash: '000332e6125010beb8a7769a13a5487a52531c04e0610e8cb17d72e891c940ccd60999d4b2fd84028ab61c126ad8a7f5'
                      }
                    }
                ]


                blockchain.replaceChain(newChain);
                expect(blockchain.chain()).toEqual(originalChain);

               
                
            })
        })
    
        
     /**
        describe('new chain is longer than original', () => {
            beforeEach(() => {
                newChain.addBlock({currency: 'XMR'});
            })
            describe('and the chain is INVALID', () => {
                it('does not replace the chain', () => {
                    newChain.chain[2].hash = 'evil-hash';
                    blockchain.replaceChain(newChain.chain);
                    expect(blockchain.chain).toEqual(originalChain);
                })
            })
             
            describe('and the chain is VALID', () => {
                it('does replace the chain', () => {
                    blockchain.replaceChain(newChain.chain);
                    expect(blockchain.chain).toEqual(newChain.chain);
                })
            })
            
        })
        **/
        
    
    })



    
});

 


