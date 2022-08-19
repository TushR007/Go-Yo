const path = require('path');
const mongoose = require('mongoose')
const cities = require('./cities')
const {descriptors,places} = require('./seedHelpers')
const Campground = require('../modules/campgrounds')

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Go-Yo');
}

    main().then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => console.log(err));


const seedDb = async () => {
    await Campground.deleteMany({})
    for(let i=0; i<=50;i++){
        const random = cities[Math.floor(Math.random()*1000)]
        const camp = new Campground({
            location: `${random.city},${random.state}`
        })

        await camp.save()
    }
}

seedDb();