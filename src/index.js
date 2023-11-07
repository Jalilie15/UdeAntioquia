
const app = require('./app.js');
const database = require('./database.js');

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en puerto', app.get('port'));
});