module.exports = function () {
    //var request = require('request');
    var functions = {};


    functions.analyze = function (req, res) {
        debugger;
        var request = require('request');
        request('http://www.google.com', function (error, response, body) {
                res.status(200).json({
                    status: 'analyzed',
                    body: body
                });
                console.log(body) // Show the HTML for the Google homepage.

        })


        /*http.get('http://www.google.com', function(res) {
            console.log("Got response: " + res.statusCode);

            res.status(200).json({
                status: 'analyzed',
                title: "title"
            });
        }).on('error', function(e) {
                console.log("Got error: " + e.message);
            });*/

    };

    return functions;
};
