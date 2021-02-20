'use strict'

const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const { DB_URL, DB_NAME } = require('../config/const.json');

const teamSchema = new Schema ({
    teamName : String,
    locations : String,
});

const Teams = model(`teams`, teamSchema);

mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Connection has worked`);
    }
})

module.exports = { "Teams": Teams };