const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://localhost/lendingbuddha', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', userRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
