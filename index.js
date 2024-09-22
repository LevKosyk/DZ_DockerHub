const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const NumbersRouter = require('./numbers/numbers');

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views/layouts'),
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use('/', NumbersRouter);

const port = process.env.PORT || 3010;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
