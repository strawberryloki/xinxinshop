var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        if (request.url === '/favicon.ico') {
            response.writeHead(200, {
                'Content-Type': 'image/x-icon'
            });
            response.end( /* icon content here */ );
        } else {
            var pathname = url.parse(request.url).pathname;

            console.log("Request for " + pathname + " received.");

            var page = route(pathname);

            response.writeHead(200, {
                "Content-Type": "text/plain"
            });
            page.pipe(response);
            console.log(response.read());
            response.end();
        }
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;