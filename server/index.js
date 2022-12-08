const app = require('./server');
require('dotenv').config()

const port = 3000;

app.listen(port, () => console.log('Listening at http://localhost:3000'));
