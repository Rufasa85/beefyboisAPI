const express = require('express');
const app = express();
const db = require('./models');
const mongoose = require('mongoose');
// const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
require('dotenv').config();
 
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect("mongodb://localhost/beefbeefbeefyboiz", { useNewUrlParser: true });
// app.use('/', express.static(__dirname + '/static'));
 
app.get('/',(req,res)=>{
     res.send('hello world');
})

app.get('/episodes',(req,res)=>{
     db.Episode.find({}).then(data=>{
         res.send(data);
     })
})

app.post('/episodes', (req,res)=>{
    if(req.body.password === process.env.PASSWORD) {
        db.Episode.create({
            title:req.body.title,
            date:new Date(),
            body: req.body.body,
            url: req.body.url
        }).then(data=>{
            res.send(data)
        })
    }
    else res.send('incorrect password');
})

app.get('/reviews',(req,res)=>{
    db.Review.find({}).then(data=>{
        res.send(data);
    })
})

app.post('/reviews', (req,res)=>{
    if(req.body.password === process.env.PASSWORD) {
        db.Review.create({
            title:req.body.title,
            date: new Date(),
            body: req.body.body,
            author: req.body.author,
            score:req.body.score
        }).then(data=>{
            res.send(data)
        })
    }
    else res.send('incorrect password');
})

app.post('/', (req,res)=>{
    if(req.body.password === process.env.PASSWORD) {
        res.send('noice')
    }
    else res.send('fail')
})

app.listen(PORT);