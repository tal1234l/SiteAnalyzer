module.exports = function () {
    var request = require('request');
    var Extrator = require("html-extractor");
    var utf8 = require('utf8');

    var myExtrator = new Extrator();

    var charset = require('charset');
    var jchardet = require('jschardet');
    var iconv = require('iconv-lite');
    var favicon = require('favicon');

    var functions = {};


    functions.analyze = function (req, res) {
        var url = req.param('url');

        /*request.get({url: 'http://www.example.com', encoding: 'binary'}, function(err, res, body) {
            var enc = charset(res.headers, body);

            *//*enc = enc || jchardet.detect(body).encoding.toLowerCase();*//*
            if (enc != 'utf-8')
                var ic = new iconv(enc, 'UTF-8//TRANSLIT//IGNORE');
            var html = ic.convert(new Buffer(body, 'binary')).toString('utf-8');
            console.log(body);
        });*/

        request.get({
                url: url,
                encoding: 'binary'
            },
            function (error, response, body) {
                var encoding = jchardet.detect(body).encoding.toLowerCase();
                favicon(url, function(err, favicon_url) {
                   myExtrator.extract(body, function(err,data){
                       var description = iconv.encode(new Buffer(data.meta.description), 'binary');
                       description = iconv.decode(new Buffer(description), encoding);

                       var title = iconv.encode(new Buffer(data.meta.title), 'binary');
                       title = iconv.decode(new Buffer(title), encoding);

                       res.status(200).json({
                            status: 'analyzed',
                            favicon: favicon_url,
                            title: title,
                            description: description
                        });
                    });
                });
        })



    };

    return functions;
};
