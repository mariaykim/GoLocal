const axios = require('axios');
require('dotenv').config();

var auth_key = Buffer.from(${process.env.api_key}).toString('base64');

const headers = { Authorization: `Basic ${auth_key}` };

/** Query RoadGoat API for all details about a travel destination */
const getDestinationInfo = (params, callback) => {
  axios
    .get(
      `https://api.roadgoat.com/api/v2/destinations/${id}`
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};


module.exports = {
  getDestinationInfo,
};
