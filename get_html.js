/**
 * Created with JetBrains WebStorm.
 * User: igarcia
 * Date: 3/02/14
 * Time: 16:46
 * To change this template use File | Settings | File Templates.
 */
var page = require('webpage').create();
page.open('http://www.google.com', function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var p = page.evaluate(function () {
            return document.getElementsByTagName('html')[0].innerHTML;
        });

        console.log(typeof(p))
        console.log(p);
    }
    phantom.exit();
});