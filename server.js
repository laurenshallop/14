const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;




// helper function
const helpers = require('./utils/helpers');

// handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});

// session (connects session to sequelize Database) --> authentication 
//var app = express();
app.use(require('serve-static')(__dirname + '/../../public'));
//app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// //testing this out
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     console.log('local strategy called with: %s', username);
//     return done(null, {name: username});
//   }));



// this is original
const session = require('express-session');

const PORT = process.env.PORT || 3001;
const app = express();


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'project2 super secret',
  cookie: {},
  resave: false, // passport example is set to true, but leaving false for now
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(passport.initialize());
app.use(passport.session());


// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {    // true will recrete the tables, set back to false after creating
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});