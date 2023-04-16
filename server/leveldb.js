// 1) Create our store
const levelup = require("levelup");
const leveldown = require("leveldown");

const db = levelup(leveldown('./links'));
module.exports = db;
