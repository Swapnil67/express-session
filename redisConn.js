const Redis = require('ioredis');

  //Redis Client Connector 
  const client = new Redis({
    port: 6379,
    host: '127.0.0.1',
    username: '',
    password: ''
  });

  module.exports = client;
