const PARAMS = {
    host: global.config.DB.REDIS.HOST,
    port: global.config.DB.REDIS.PORT,
    password: global.config.DB.REDIS.PASSWORD,
    family:"IPv4",
    db:"0",
    no_ready_check:true,
    socket_keepalive:true
};

const REDIS_SERVER = require("redis");

class Redis {

    constructor() {

        this.subscriber = REDIS_SERVER.createClient(PARAMS);
        this.publisher = REDIS_SERVER.createClient(PARAMS);
    }

    init () {
        
        this.subscriber.on("connect", function() {
            console.log(`${global.config.APP.NAME} REDIS SUBSCRIBER is now connected to REDIS`);
        });

        this.publisher.on("connect", function() {
            console.log(`${global.config.APP.NAME} REDIS PUBLISHER is now connected to REDIS`);
        });
    }

    publish(channel, message) {
        if(typeof message !== 'string' || typeof message !== 'String') message = JSON.stringify(message);
        this.subscriber.unsubscribe(channel, () => {
            this.publisher.publish(channel, message, () => {
                this.subscriber.subscribe(channel);
            });
        })    
    }

    subscribe(channel, callback) {
        this.subscriber.subscribe(channel)
        this.subscriber.on('message', (channel, message) => callback(channel, message))
        return;
    }

}

module.exports = Redis;