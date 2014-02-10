/**
 * Created with JetBrains WebStorm.
 * User: igarcia
 * Date: 3/02/14
 * Time: 10:22
 * To change this template use File | Settings | File Templates.
 */
var page = require('webpage').create();
var system = require('system');
var t;
var address;

if (system.args.length === 1)
{
    console.log('Usage: loadspeed.js http://www.marca.com');
    phantom.exit();
}

// cogemos el instante de tiempo actual
t = Date.now();
// Recogemos del parámetro de entrada la url.
address = system.args[1];
// Abrimos la web para lectura.
page.open(address, function(status) {
    // Si la respuesta es distina de "success"
    if (status !== 'success')
    {
        console.log('FAIL to load the address');
    }
    else
    {
        // Calculamos el tiempo en el instante de ahora y lo restamos.
        t = Date.now() - t;
        console.log('Loading time ' + t + ' msec');
    }
    phantom.exit();
});