const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { HttpError } = require("../utils");
const { JWT_SECRET, JWT_EXPIRES } = process.env;


module.exports = { register, login, logout, getCurrent, updateSubscription };