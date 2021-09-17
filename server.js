const express = require('express');
const path = require('path');
var expressStaticGzip = require("express-static-gzip");
const port = process.env.PORT || 8080;
const app = express();

app.use(expressStaticGzip(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => console.log(`You can open your application on http://localhost:${port}`));