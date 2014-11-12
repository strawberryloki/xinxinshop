var fs = require('fs');

function route(pathName) {
    var res;
   pathName = "pages"+pathName;
   fs.readFile(pathName, function(err, contents) {
		if(!err) {
			res.setHeader("Content-Length", contents.length);
			res.setHeader("Content-Type", mimeType);
			res.statusCode = 200;
			res.end(contents);
		} else {
			res.writeHead(500);
			res.end();
		}
	});
    return res;
}
route('/index.html');
exports.route = route