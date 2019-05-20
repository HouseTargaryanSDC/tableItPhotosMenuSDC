const http = require('http');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '54.183.185.112',
  database: 'tablelit',
  port: 5432,
});

pool.connect();

const headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Content-Type': 'application/json',
};

const requestHandler = (req, res) => {
  const menus = req.url.split('/api/menus/');
  // if at the api/menus endpoint
  if (!menus[0]) {
    // get all items for a restaurant
    if (req.method === 'GET') {
      pool.query(`SELECT * FROM menus WHERE rest_id=${menus[1]}`)
        .then((data) => {
          res.writeHead(200, headers);
          res.end(JSON.stringify(data.rows));
        })
        .catch(err => console.error(err));
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
};

http.createServer(requestHandler).listen(3000);
