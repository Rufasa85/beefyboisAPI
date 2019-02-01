const express = require('express');
const app = express();
// const db = require('./models')
// const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
require('dotenv').config();
 
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/', express.static(__dirname + '/static'));
 
app.get('/',(req,res)=>{
     res.send('hello world');
})

app.post('/', (req,res)=>{
    if(req.body.password === process.env.PASSWORD) {
        res.send('noice')
    }
    else res.send('fail')
})

app.listen(PORT);