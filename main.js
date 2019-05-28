const http = require('http')
const url = require('url')

const hostname = '127.0.0.1'
const port = 3000

const app = http.createServer(function (req, res) {
    const _url = req.url

    if (_url === '/') {
        res.writeHead(200)
        res.end('<h1>Hello World!</h1>')
    } else {
        res.writeHead(404)
        res.end('<h1>Not Found!</h1>')
    }
})

app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`)
})