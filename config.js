
const Config = {

    init: () => {
        const configuration = {

            production: {
                ADDRESS_PREFIX: 'v',
                APP: {
                    NAME: '',
                    DESCRIPTION: '',
                    KEY: '',
                    PORT: 7020
                },
            },

            staging: {
                APP: {
                    NAME: '',
                    DESCRIPTION: '',
                    KEY: 'QHQ65A7PQLCtDwHYPgkksEgmaS5FCcsF',
                    PORT: 7020
                },
            },

            development: {
                
                API_VERSION: 'v1',
                DIFFICULTY: 15,
                MINE_RATE: 2000, // 1 block per 1 second
                ADDRESS_PREFIX: 'v',
                APP: {
                    NAME: '',
                    DESCRIPTION: '',
                    KEY: '',
                    PORT: 7020
                },
                
                GENESIS_BLOCK: {
                    payload: {
                        created_at: 1624797068713, 
                        data: {GENESIS: true}, 
                        lastHash: "0",
                        difficulty: 15,
                        nonce: 4
                    },
                    hash: "0cd857aca2b81652b8c4df598f2dd11d416b45aa411e36ff0b9f0fdad3ef934913acc279f1fa7c44c1d45646442be389"
                },
                DB: {
                    LMDB: {
                        path: './database/variant.db',
                        compression: true,
                        encryptionKey: 'QHQ65A7PQLCtDwHYPgkksEgmaS5FCcsF'
                    }
                },
                MESH: {
                    ROOT_NODE_ADDRESS: 'http://localhost:7020',
                    IS_SEEDER_NODE: false,
                    SEEDERS: [
                        {port: 7021, address:'127.0.0.1'}
                    ],
                    MINPEER: 5
                }
                 
            },

            test: {
                ROOT_NODE_ADDRESS: 'http://localhost:7020',
                API_VERSION: 'v1',
                DIFFICULTY: 15,
                MINE_RATE: 2000, // 1 block per 1 second
                ADDRESS_PREFIX: 'v',
                APP: {
                    NAME: '',
                    DESCRIPTION: '',
                    KEY: '',
                    PORT: 7020
                },
                
                GENESIS_BLOCK: {
                    payload: {
                        created_at: 1624797068713, 
                        data: {GENESIS: true}, 
                        lastHash: "0",
                        difficulty: 15,
                        nonce: 4
                    },
                    hash: "0cd857aca2b81652b8c4df598f2dd11d416b45aa411e36ff0b9f0fdad3ef934913acc279f1fa7c44c1d45646442be389"
                },
                DB: {
                    REDIS : {
                        HOST: "localhost",
                        PASSWORD: "6b17e213fbee74bbf8e50491056a757a2c0f94d0a0357146e77a3997dc003015",
                        PORT: 6379,
                    },
                    LMDB: {
                        path: './database/variant.db',
                        compression: true,
                        encryptionKey: 'QHQ65A7PQLCtDwHYPgkksEgmaS5FCcsF'
                    }
                
                }

                 
            },
        
            
        
            
    
            
        }

        let config = configuration[process.env.NODE_ENV];
        let REALM = '@Variantis';
        
        config.REALM = REALM;
        config.APP.NAME = 'Variant';
        config.APP.DESCRIPTION = 'Variant privacy coin network';
        global.config = config;
        return config;

    }  
}

module.exports = Config.init();