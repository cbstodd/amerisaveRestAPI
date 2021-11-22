const express = require('express');
const app = express();

const messageRoutes = require('./src/api/routes/messages.route.js');
const userRoutes = require('./src/api/routes/user.route.js');

app.use('/messages', messageRoutes);


