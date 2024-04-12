const express = require('express');
const app = express();
const port = 3000;



app.route('/auth', require('./routes/account.route'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));