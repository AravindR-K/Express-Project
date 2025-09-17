const dotenv = require('dotenv')
const mongoose = require('mongoose')
const fs = require('fs');
const Movie = require('./../Models/movieModel'); 

dotenv.config({path : './config.env'});

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser : true
}).then((conn) => {
    console.log('DB Connection Successful');
}).catch((error) => {
    console.log('Some error has occured');
});

const movies = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8')); // will return a javascript array

const deleteMovies = async() => {
    try {
        await Movie.deleteMany();
        console.log('Data Successfully deleted.');
    } catch(err) {
        console.log(err.message);
    }
}

const importMovies = async() => {
    try {
        await Movie.create(movies);
        console.log('Data Successfully imported.');
    } catch(err) {
        console.log(err.message); 
    }
}

if (process.argv[2] === '--import') {
    importMovies();
}
if (process.argv[2] === '--delete') {
    deleteMovies();
}

