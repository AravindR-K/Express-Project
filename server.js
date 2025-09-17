const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');



mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then((conn) => {
    // console.log(conn);
    console.log("DB connection successful");
}).catch((error) => {
    console.log("some error has occured")
});


// Create a server
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('server has started ...');
});