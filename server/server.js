const app = require('express')();
const compression = require('compression');
const bodyParser = require('body-parser');

const routes = require('./routes');

const db = require('./db');

app.use(compression());

app.use(bodyParser.json());

app.use('/api', routes);




const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('App listen to ' + port);
});
