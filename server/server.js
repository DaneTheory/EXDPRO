const express = require('express'),
  path = require('path'),
  app = express();

const router = require('./router')

app.set('port', 8999);

app.use(express.static(path.join(__dirname, '..', './')));
app.use('/', router);

const server = app.listen(app.get('port'), function () {
  console.log('Dane Dev router catchall App is running on:' + app.get('port'));
});
