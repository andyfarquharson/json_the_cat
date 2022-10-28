const request = require('request');


const fetchBreedDescription = ((breedName, callback) => {
  const website = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(website, (err, response, body) => {
    if (err) {
      return callback(err, null);
    }
  
    const data = JSON.parse(body);
    const desc = data[0];
    // condition for a description of the breed
    if (desc) {
      callback(null, desc.description);
    
    } else {
      callback("That breed doesn't exist in the API. Please try again.");
    }
    
  });
});

module.exports = { fetchBreedDescription };