/** @format */

const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://mern:mernproject@cluster0.rrltd.mongodb.net/mern-project',
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connected to mongoDB'))
  .catch((err) => console.log('Failed to connect', err));
