const fs = require('fs')
const request = require('request');



//htmlrequest
const fetcher = function(url, fileToWrite){
  request(url, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
    // Writing the file.
    fs.writeFile(fileToWrite, body, err => {
      if (err) {
        console.error(err);
      } 
      console.log(`Downloaded and saved ${body.length} bytes to ${fileToWrite}`)
    });
  });
};

fetcher(process.argv[2], process.argv[3])

