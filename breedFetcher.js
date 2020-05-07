const request = require('request');

const fetchPage = (breed, callback) => {
  const page = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(page, (error, response, body) => {
    //If page doens't exist
    const parsed = JSON.parse(body);

    if (error) {
      callback(error, null);
    }

    if (parsed[0]) {
      callback(null, parsed[0].description);
    } else {
      callback("Couldn't find breed", null);
    }
  });
};


module.exports = fetchPage;