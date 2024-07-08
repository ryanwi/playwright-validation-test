const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('form', { errorMessage: '' });
});

app.post('/save', (req, res) => {
  const shouldSucceed = req.body.shouldSucceed === 'on';

  if (shouldSucceed) {
    res.redirect('/success')
  } else {
    res.render('form', { errorMessage: 'true' });
  }
});

app.get('/success', (req, res) => {
  res.render('success');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
