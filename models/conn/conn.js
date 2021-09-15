const mongoose = require('mongoose');

function Conn(url,porta,banco){
    mongoose.connect(`mongodb+srv://root:mvcZmewbgnemIaWe@cluster0.4eiay.mongodb.net/test`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>{
        console.log("Connected");
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = Conn;