var express = require("express");
var app = express();

// console.log(app);
app.get("/", (req, res) => {
    res.send("Homepage");
});

app.get("/contact/:id?", (req, res) => {
    res.send(`Contact us ${req?.params?.id ?? ''}`);
});

app.listen(3000, () => console.log('Server running on port : 3000'));