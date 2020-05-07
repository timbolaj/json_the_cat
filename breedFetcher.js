const request = require('request');
// Allow user to search for breed using command-line arguments
const breed = process.argv[2];
// Want to find and test breed search
// Using request, fetch data
const getWebPage = (uri, breed) => {
  const query = `?q=${breed}`;
  const page = uri + query;
  
  request(page, (error, response, body) => {
    if (error) {
      console.log(`There's and error: ${error}`);
    }

    const parsed = JSON.parse(body);

    //If page doens't exist
    if (parsed[0]) {
      console.log(parsed[0].description);
    } else {
      console.log('Breed not found');
    }
  });
};

getWebPage('https://api.tllhecatapill.com/v1/breeds/////search', breed);