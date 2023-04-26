// Front end is done, you are making the backend

// You will need to make a routes folder and two(three) files in this folder --> apiRoutes.js, and htmlRoutes.js (index.js) [Activity 22 solution has this]

// ***The path set in your router.*('/yourPathHere') for these files needs to reflect it's positioning relative to the path called in server.js -- Activity 22... router middleware

// You will need to make a server.js in the main directory of the app.

// The mini-project is a gold mine of what you will need to complete this - server.js, routes/tips.js, and helpers/fsUtils.js as well as Activities 21/22 will be particularly helpful - how can the promisified readFile and writeFile be used? 

// If you are going to work on the Bonus section (I highly recommend this!), research how the array.filter() method can help with this task.  How would you go about making use of an id?
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(clog);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

// Wildcard route to direct users to a 404 page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
