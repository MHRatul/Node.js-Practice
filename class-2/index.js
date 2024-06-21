let http = require('http');
let url = require('url');

//declare the port 
let PORT = 8000;

//create the server
let server = http.createServer((req, res) => {

    //get the url
    let parsedUrl = url.parse(req.url, true);
    let pathName = parsedUrl.pathname;

    //parse query
    let queryString = parsedUrl.query;

    //get http method
    let method = req.method.toLocaleLowerCase();
    res.end("This is first node server.");   
});

//listen the server
server.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});