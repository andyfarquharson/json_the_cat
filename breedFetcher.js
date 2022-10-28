const request = require('request');

const breedName = process.argv[2];
const website = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const fetchBreedDescription = (website, (err, description) => {
  request(website, (err, response, body) => {
    if (breedName === undefined) {
      console.log("Don't forget to add a breedname!");
      return;
    } else if (body.length === 2) {
      console.log("That breed doesn't exist in the API. Please try again.");
      return;
    } else if (err) {
      console.log(`Error: ${err}`);
      return;
    }
    console.log(body[0].length)
    const data = JSON.parse(body);
    console.log(data[0].description);
    
  });
})


module.exports = { fetchBreedDescription };