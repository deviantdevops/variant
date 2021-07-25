const settings = {

    development: {
        ADDRESS_PREFIX: 'vrnt'
    },

    staging: {
        
    },

    production: {
        
    }
};

const config = () => {
    let configuration = settings[process.env.REACT_APP_ENV];
    configuration.APP_NAME = '';
    configuration.COMPANY_NAME = '';
    configuration.COMPANY_URL = '';
    global.config = configuration;
    return configuration
}

module.exports = config();