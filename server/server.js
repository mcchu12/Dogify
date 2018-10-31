const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;

app.use(cors());
app.use(express.static('./public'));

app.listen(port, () => { console.log('Serving at 3000') });



