const mongoose = require('mongoose')


const mongoURL = 'mongodb://localhost:27017/hotel'

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})


const db = mongoose.connection;


db.on('connected', () => {
    console.log('Connected to Mongodb')
})
db.on('error', () => {
    console.log(' Mongodb connection error')
})
db.on('disconnected', () => {
    console.log('DisConnected to Mongodb')
});


module.exports = db;