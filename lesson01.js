const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app
.use(bodyParser.json())
.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
.use('/', require('./routes'));


app.listen(process.env.PORT || 8080, ()=>{
    console.log('Web Server is listening at port ' + (process.env.PORT || 8080));
});
