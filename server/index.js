const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js')

const app = express();

app.use(bodyParser.json());

app.get('/get-properties', controller.getProperties)
app.get('/update-properties-list', controller.getUpdatedList)


const port = 3030;
app.listen(port, () => console.log(`Listening on port ${port}`));