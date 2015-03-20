module.exports = function () {
    var request = require('request');
    var Extrator = require("html-extractor");
    var myExtrator = new Extrator();
    var favicon = require('favicon');

    var functions = {};


    functions.analyze = function (req, res) {
        var url = req.param('url');
        request(url, function (error, response, body) {
            favicon(url, function(err, favicon_url) {
               myExtrator.extract(body, function(err,data){
                    res.status(200).json({
                        status: 'analyzed',
                        body: data.meta,
                        favicon: favicon_url
                    });
                });
            });
        })



    };

    return functions;
};
