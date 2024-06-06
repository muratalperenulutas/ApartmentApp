
const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect('mongodb+srv://root:Password@mydatabase.bgb3ppk.mongodb.net/?retryWrites=true&w=majority&appName=MyDatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database, The URI is: ' + process.env.DB_URI);
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
};

module.exports = connection;


//mongoDB atlasa'a connection oluşturmak için monggose'yi import edelim
/*const mongoose = require('mongoose')
//şimdi mongoose'yi kullanarak db'e connection işlemi oluşturalım
const connection = ()=>{
    mongoose.connect("mongodb+srv://root:Password@mydatabase.bgb3ppk.mongodb.net/?retryWrites=true&w=majority&appName=MyDatabase", {
        dbName: 'MyDatabaseMobile',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('Connected to database, The URI is: '+process.env.DB_URI);})
    .catch((err)=>{ console.log(err)})
}
//şimdi connection'u import edelim

module.exports = connection;
*/


/*
const mongoose = require('mongoose');

const connection = () => mongoose.createConnection("mongodb+srv://root:Password@mydatabase.bgb3ppk.mongodb.net/?retryWrites=true&w=majority&appName=MyDatabase", {
        dbName: 'MyDatabaseMobile',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
*/

/*
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.DB_URI;

if (!uri) {
    throw new Error('DB_URI is not defined in .env file');
    }

const connection = ()=>{mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
    console.log('MongoDB connected successfully!');
    })
    .catch((err) => {
    console.error('MongoDB connection error:', err);
    })}
module.exports = connection();
*/
