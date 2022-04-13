const mongoose = require("mongoose");

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect(process.env.URI_DB, options)
    .then(db => console.log("Database connected"))
    .catch(err => console.error(err));