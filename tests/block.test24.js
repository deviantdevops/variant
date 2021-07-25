const Block = require('../blockchain/block');
//const CONFIG = require('../config');
const UNIQID = require('uniqid');
const { v4: uuidv4 } = require('uuid');
const CRPYTO = require('crypto');

const payload = {
    "created_at": Date.now(),
    "id": uuidv4(),
    "lastHash": "foo-hash",
    "data": {},
    "difficulty": 2,
    "nonce": CRPYTO.randomBytes(16).toString('base64')
};
const hash = 'foo-hash';
const block = new Block({payload: payload, hash: hash, });

describe('Block', () => {
    const CONFIG = require('../config');

    it('has a payload property', () => {
        expect(block.payload).toEqual(payload);
    });

    it('has a created_at property', () => {
        expect(block.payload.created_at).not.toEqual(undefined);
    });

    it('has a lastHash property', () => {
        expect(block.payload.lastHash).not.toEqual(undefined);
    })

    it('has a hash property', () => {
        expect(block.hash).toEqual(hash);
    });

    it('has a difficulty property', () => {
        expect(block.payload.difficulty).toEqual(payload.difficulty);
    });

    it('has a nonce property', () => {
        expect(block.payload.nonce).toEqual(payload.nonce);
    });
    
});
 
describe('genesis()', () => {
    const genesisBlock = block.genesis();
    it('returns a Block instance', () => {
        expect(genesisBlock instanceof Block).toBe(true)
    })

    it('returns the genesis block payload', () => {
        expect(genesisBlock).toEqual(global.config.GENESIS_BLOCK);
    })
});

describe('mineBlock()', () => {
    const lastBlock = Block.genesis();
    const payload = {
        created_at: new Date().getTime(),
        "data": {}, 
        lastHash: lastBlock.hash,
        difficulty: 15
    };
    const minedBlock = Block.mineBlock(payload, payload.created_at);

    it('sets the `payload`', () => {
        expect(minedBlock.payload).toEqual(payload);
    });

    it('sets a `created_at`', () => {
        expect(minedBlock.payload.created_at).not.toEqual(undefined);
    })

    it('returns a Block instance', () => {
        expect(minedBlock instanceof Block).toBe(true)
    });

    it('sets a `hash` that meets the difficulty criteria', () => {
        expect(minedBlock.hash.substr(0, minedBlock.payload.difficulty))
        .toEqual( '0'.repeat(minedBlock.payload.difficulty) )
    })

});

 /** 
describe('adjustDifficulty()', () => {
  /**  
    it('raises the difficulty for a quickly mined block', () => {
        expect(Block.adjustDifficulty( block.payload, block.payload.created_at + global.config.MINE_RATE - 100))
        .toEqual(block.payload.difficulty+1);
      });
    

console.log(block)
    it('lowers the `difficulty` for a block which was mined too slow', () => {
        expect( Block.adjustDifficulty( block.payload, block.payload.created_at + global.config.MINE_RATE + 100 ))
        .toEqual(block.payload.difficulty - 1)
    })
    

});
**/


