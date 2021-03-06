const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const cors = require('cors');

app.use(cors());

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
