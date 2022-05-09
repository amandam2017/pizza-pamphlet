const express = require('express');
const app = express();

//middlewere to make public folder visible
app.use(express.static('public'));

const PORT = process.env.PORT || 2022;

app.listen(PORT, function () {
    console.log(`App started on port ${PORT}`)
});