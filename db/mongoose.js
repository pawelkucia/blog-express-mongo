const mongoose = require('mongoose');

const uri = process.env.DB_URL || "";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});