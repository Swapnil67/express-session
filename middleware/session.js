const session = require("express-session");
const connectRedis = require("connect-redis");
const redisClient = require("../redisConn");

const RedisStore = connectRedis(session);

module.exports = session({
  name: 'r_id',
  store: new RedisStore({ client: redisClient }),
  secret: "mysecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // *If true: only transmit cookie over https
    httpOnly: true, // *If true: prevents client-side JS from reading the cookie
    maxAge: 1000*60*30 //*30 mins
  }
})