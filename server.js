            const exphbs = require('express-handlebars'),
                express = require('express'),
                routes = require('./controllers/burgers_controller'), 


app = express(),

PORT = process.env.PORT  ||  8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(routes);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost: ${PORT}`);
})