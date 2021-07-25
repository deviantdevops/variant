const Blockchain = require('../blockchain/blockchain');
const Block = require('../blockchain/block');
const CONFIG = require('../config');

const blockchain = new Blockchain();

blockchain.addBlock({ data: 'initial' });

console.log('first block', blockchain.chain[blockchain.chain.length-1]);

let prevTimestamp, nextTimestamp, nextBlock, timeDiff, average;

const times = [];

for (let i=0; i<10; i++) {
  prevTimestamp = blockchain.chain[blockchain.chain.length-1].payload.created_at;

  blockchain.addBlock({ data: `block ${i}`});
  nextBlock = blockchain.chain[blockchain.chain.length-1];

  nextTimestamp = nextBlock.payload.created_at;
  timeDiff = nextTimestamp - prevTimestamp;
  times.push(timeDiff);

  average = times.reduce((total, num) => (total + num))/times.length;

  console.log(`Time to mine block: ${timeDiff}ms. Difficulty: ${nextBlock.payload.difficulty}. Average time: ${average}ms`);
}

console.log(blockchain.chain)