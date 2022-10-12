require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json());

app.listen(PORT, ()=> {
    console.log(`Server is up & running on PORT ${PORT}`);
});
