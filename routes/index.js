module.exports = function () {
    var request = require('request');
    var functions = {};


    functions.analyze = function (req, res) {
        debugger;
        request('http://www.google.com', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body) // Show the HTML for the Google homepage.
            }
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
