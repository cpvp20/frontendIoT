const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path')

app.use(express.static(__dirname + "/home"));
app.use('/login', express.static(__dirname + "/login"));

app.use('/patients/logs', express.static(__dirname + "/patients/logs"));
app.use('/patients/analytics', express.static(__dirname + "/patients/analytics"));
app.use('/patients/create', express.static(__dirname + "/patients/create"));
app.use('/patients/update', express.static(__dirname + "/patients/update"));

app.use('/users/getOne', express.static(__dirname + "/users/getOne"));
app.use('/register', express.static(__dirname + "/users/create"));
app.use('/users/update', express.static(__dirname + "/users/update"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
