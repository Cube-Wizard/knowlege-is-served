const fs = require('fs');

module.exports = {
  requestListener: (req, res) => {
    fs.readFile('./website.html',  'utf-8', (err, data) => {
      if (err){
      res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(`${err}`);
          res.end();
          console.log(`Something went wrong:\n${error}`);
        } else {
            console.log(`Something went right:\n${data}`);
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end(); 
        }
    })
  }
}