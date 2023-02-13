import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './configs/viewEngine';
import webRoutes from './routes/web';
var cookieParser = require('cookie-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//config view Engine
viewEngine(app);
//config web routes
webRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Len ey: ' + port);
});
