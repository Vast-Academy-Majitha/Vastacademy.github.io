const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users'); // Importing user-related routes

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Mounting routes from usersRouter
app.use('/admin', usersRouter); // Mounting under '/admin' for user-related admin actions

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
