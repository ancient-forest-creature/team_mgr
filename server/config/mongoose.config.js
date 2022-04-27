const mongoose = require("mongoose");

const workingDb = "teammgrDb"

mongoose.connect(`mongodb://localhost/${workingDb}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to ${workingDb}`))
    .catch(err => console.log(`Something went wrong when connecting to ${workingDb} `, err));