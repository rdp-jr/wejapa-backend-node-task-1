
const http = require('http')

const TEXT = 'Hello World, welcome to WeJapa Internships'

//localhost:5000
http.createServer(function (req, res) {
	res.write(TEXT)
	res.end()
}).listen(5000);