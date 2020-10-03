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
    methodOverride = require('method-override'),
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
// body parser
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

// method-override
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        let method = req.body._method
        delete req.body._method
        return method
    }
}))

// logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// handlebars helpers
const {
    formatDate,
    stripTags,
    truncate,
    editIcon,
    select
} = require('./helper/hbs');

// load view handlebars
app.engine('.hbs', exphbs({
    helpers: {
        formatDate,
        stripTags,
        truncate,
        editIcon,
        select
    },
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
// set global variable
app.use(function (req, res, next) {
    res.locals.user = req.user || null
    next()
})

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`))