const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path')

app.use(express.static(__dirname + "/home"));
app.use('/home', express.static(__dirname + "/home"));
app.use('/login', express.static(__dirname + "/login"));

app.use('/analytics/logs', express.static(__dirname + "/analytics/logs"));
app.use('/analytics/day', express.static(__dirname + "/analytics/day"));
app.use('/analytics/week', express.static(__dirname + "/analytics/week"));

app.use('/register', express.static(__dirname + "/users/create"));
app.use('/users/update', express.static(__dirname + "/users/update"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
