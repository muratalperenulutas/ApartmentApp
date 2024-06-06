//express'i import edelim
const express = require('express')
//app'i oluşturalım
const app = express();
//body parser'i require edelim
const body_parser = require('body-parser');
//app'in body parser'i kullanmasını sağlayalım
app.use(body_parser.json());
//router'i export edelim
const UserRouter = require('./routers/user_router')

//app üzerinde router'i kullanalım
app.use('/',UserRouter);

const foodRouter = require('./routers/food_router');
app.use('/', foodRouter);

//app'i export edelim
module.exports = app;


