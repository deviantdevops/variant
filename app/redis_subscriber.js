const REDIS_PARAMS = {
    host: global.config.DB.REDIS.HOST,
    port: global.config.DB.REDIS.PORT,
    password: global.config.DB.REDIS.PASSWORD,
    family:"IPv4",
    db:"0",
    no_ready_check:true,
    socket_keepalive:true
};

var REDIS = require("redis");
var SUBSCRIBER = REDIS.createClient(REDIS_PARAMS);

SUBSCRIBER.on("connect", function() {
    console.log(`${global.config.APP.NAME} REDIS SUBSCRIBER is now connected to REDIS`);
});

module.exports = SUBSCRIBER;