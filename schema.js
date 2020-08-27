const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
    Name :{
        type : String,
        require : true,
        trim : true
    },
    Age :{
        type : String,
        require : true
    },
    City :{
        type : String,
         require : true
      },
    CreatedDate : {
        type : Date,
        default : Date.now
    }
});
 module.exports = mongoose.model('info',infoSchema);