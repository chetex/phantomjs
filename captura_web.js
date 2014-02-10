/**
 * Created with JetBrains WebStorm.
 * User: igarcia
 * Date: 3/02/14
 * Time: 10:18
 * To change this template use File | Settings | File Templates.
 */
var page = require('webpage').create();
page.open('http://www.elpais.es', function()
{
    // "render" captura una web en un fichero.
    page.render('captura.png');
    phantom.exit();
});