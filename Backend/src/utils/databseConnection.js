const mongoose = require('mongoose');
const config = require('../configs/index');
const logger = require('../utils/logger');

let database;

const connect = async () => {
    const MONGODB_URL = config.DB_CONNECTION_STRING;

    if(database) return;

    mongoose.connect(MONGODB_URL).then((connection)=> {
        database = connection;
        logger.info('Database Connected!');
    }).catch((error)=> {
        logger.error(error.message);
    })
}

exports.connect = connect;