/**
 * Created with JetBrains WebStorm.
 * User: igarcia
 * Date: 3/02/14
 * Time: 10:57
 * To change this template use File | Settings | File Templates.
 */
var page = require('webpage').create();
var system = require('system');

var address = system.args[1];

page.open(address, function(status) {
    var title = page.evaluate(function() {
        return document.title;
    });
    console.log('Page title is ' + title);
});