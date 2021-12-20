const mongoose = require('mongoose');

const url = "mongodb+srv://den_flex:72983451linkoln@cluster0.aob0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const options = {useUnifiedTopology: true, useNewUrlParser: true}

mongoose.connect(url, options)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));