/**
 * Created with JetBrains WebStorm.
 * User: igarcia
 * Date: 3/02/14
 * Time: 11:13
 * To change this template use File | Settings | File Templates.
 */
var page = require('webpage').create();

var slider_page_url = "http://www.muchoviaje.com/oferta/mucho-caribe";

page.onResourceRequested = function(request) {
    console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response) {
    console.log('Receive ' + JSON.stringify(response, undefined, 4));
};

page.open(slider_page_url);
