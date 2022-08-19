const express = require('express')
const app = express()
const path = require('path');
const mongoose = require('mongoose')
const Campground = require('./modules/campgrounds')

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Go-Yo');
}

    main().then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => console.log(err));

app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'))


app.get('/',(req,res) => {
    res.render('home')
})


app.get('/makecampground',async (req,res) => {
    const camp = new Campground({ title: 'My Background', price:'Cheap af' })
    await camp.save()
    res.send(camp)
})

app.listen(3000,() => {
    console.log("APP LISTENING ON PORT 3000");
})