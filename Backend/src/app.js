require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('./utils/logger');
const passport = require('passport');
const connect = require('./utils/databseConnection');
const googleAuth = require('./configs/googleAuth');

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json());

app.listen(PORT, ()=> {
    logger.info(`Server is up & running on PORT ${PORT}`);
    connect.connect();
});
