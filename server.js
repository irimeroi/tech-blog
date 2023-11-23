const express = require('express');
// const session =require('express-session');
const routes = require('./controllers');
// const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT;

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => { console.log(`Server listening on: http://localhost:${PORT}`) });
})

