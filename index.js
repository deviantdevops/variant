const CONFIG = require('./config');
const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');
const path = require('path');
const cors = require('cors')
const Blockchain = require('./blockchain/blockchain');
const TransactionPool = require('./wallet/transaction_pool');
const Wallet = require('./wallet/wallet');
const Miner = require('./blockchain/miner');

const smoke = require('smokesignal')

const blockchain = new Blockchain().getInstance();
const transactionPool = new TransactionPool().getInstance();
const wallet = new Wallet();
const miner = new Miner().getInstance();
// throttle(() => {})
//const PubSub = require('./lib/pubsub');
//const PUBSUB = new PubSub({blockchain: blockchain, transactionPool: null}).getInstance();

/********************************************
 * GLOBAL VAR
 *******************************************/
global.poolUpdated = false;
global.wallet = wallet;


/********************************************
 * ROUTERS
 *******************************************/
const v1Router = require('./routes/v1Router');
/********************************************
 * EXPRESS / SERVER SETUP
 *******************************************/
 const app = express();
 app.disable('x-powered-by');
 app.set('trust proxy', true);
 app.use(bodyParser.json());
 app.use(express.static(path.join(__dirname, 'client/dist'), {maxAge: '30d'}))
 
 const corsOptions = {
   origin: 'http://localhost',
   methods: 'GET,PUT,POST,DELETE',
   allowedHeaders: 'Content-Type, Authorization',
   optionsSuccessStatus: 200
 }
 app.use(cors(corsOptions))
/********************************************
 * MIDDLEWARE
 *******************************************/

app.get('*.js', function (req, res, next) {
   if (req.header('Accept-Encoding').includes('gzip')) {
       req.url = req.url + '.gz';
       res.set('Content-Encoding', 'gzip');
       res.set('Content-Type', 'text/javascript');
   }
   next();
});

app.get('*.css', function (req, res, next) {
   if (req.header('Accept-Encoding').includes('gzip')) {
       req.url = req.url + '.gz';
       res.set('Content-Encoding', 'gzip');
       res.set('Content-Type', 'text/css');
   }
   next();
});

app.use('*', (req, res, next) => {
    console.log('APPLICATION MIDDLEWARE')
    next();
});

/********************************************
 * ROUTES
 *******************************************/
app.use('/api/v1', v1Router);

app.get('/', function(req, res, next) {
   
   return res.status(200).send('Variant Blockchain API').end();
});





app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'client/dist/index.html'))
})

/********************************************
 * SYNC CHAIN ON LISTEN
 *******************************************/
const syncChain = ( ) => {
   console.log(`SYNCING BLOCKCHAIN WITH ${global.config.ROOT_NODE_ADDRESS}`)
   request({ url: `${global.config.ROOT_NODE_ADDRESS}/api/${global.config.API_VERSION}/blocks`}, (error, response, body) => {
      if(!error && response.statusCode === 200){
         const rootChain = JSON.parse(body);
         console.log('REPLACING CHAIN WITH', rootChain)
         blockchain.replaceChain(rootChain);
      }
   })
}
/********************************************
 * START APP
 *******************************************/

const Stream = require('stream');

let PEER_PORT = global.config.APP.PORT;
if(process.env.GENERATE_PEER_PORT === 'true'){
   PEER_PORT = global.config.APP.PORT + Math.ceil(Math.random() * 1000);
}
const PORT = PEER_PORT;
app.listen(PORT, () => {
   console.log(`${global.config.APP.NAME} listening on port: ${PORT}`);
   if(PEER_PORT !== global.config.APP.PORT){

      //      syncChain();
      //TransactionPool.syncPool();
   }  
});

const MESH = require('./peer/p2p')
let mesh = new MESH(PORT).getInstance();
mesh.connect().then(node => {
  
   //console.log('PEERS:',node.peers.dump())
   if(node.connected){
      global.mesh = mesh;
      global.nodeid = node.id;
      global.node = node;

      node.peers.on('add', (peer) => {
         /**
          * Send current transaction pool
          */
         let pool = transactionPool.validTransactions()
         node.broadcast.write(JSON.stringify({channel: 'pool', payload: pool}))
      })
      
      
   }

})






/********************************************
 * ERROR HANDLING
 *******************************************/

