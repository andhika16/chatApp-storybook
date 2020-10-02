const {
    connect
} = require('mongoose');

const path = require('path'),
    express = require('express'),
    dotenv = require('dotenv'),
    connectDB = require('./config/db'),
    morgan = require('morgan'),
    exphbs = require('express-handlebars'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session)

// load config
dotenv.config({
    path: './config/config.env'
})
// load passport
require('./config/passport')(passport);

// database function connect
connectDB()


const app = express();
// logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


// load handlebars
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
// session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}))
// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`))