const mongoose = require('mongoose');

function Conn(dbUrl, dbUser, dbPass, dbData){
    mongoose.connect(`${dbUrl}/${dbData}`,{
        user: dbUser,
        pass: dbPass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>{
        console.log("Connected");
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = Conn;