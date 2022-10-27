const request = require('request');

const input = process.argv[2];
const website = 'https://api.thecatapi.com/v1/breeds/search?q=' + input;

request(website, (err, response, body) => {
  
  if (body === {}) {
    console.log("That breed doesn't exist in the API. Please try again.");
    return;
  }
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);

});