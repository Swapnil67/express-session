const cors = require("cors");

var whitelist = new Set(['http://example1.com', 'http://example2.com'])

const corsOptions = {
  "optionsSuccessStatus": 200,
  // origin: function (origin, callback) {
  //   if (whitelist.has(origin)) {
  //     callback(null, true)
  //   } else {
  //     callback(new Error('Not allowed by CORS'))
  //   }
  // }
  origin: "*",
  credentials: true
}

module.exports = cors(corsOptions); 