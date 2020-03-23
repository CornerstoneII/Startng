// Define http module and File system Module
const http = require('http');
const fs = require('fs');


// Creating a server

http.createServer((req, res) => {

    // Creating a body Variable to store data
    
	let body = '';

    // Route for Get method or request
	if(req.method === 'GET' && req.url === '/')
	{

		res.writeHead(200, {'Content-Type' : 'text/html'});

		fs.readFile('./http-form.html', 'UTF-8', (err, data) => {

			if(err) throw err;

			res.write(data);

			res.end();

		});

    } 
    // Route for POST request
    else if(req.method === 'POST'){

        var writeStream = fs.createWriteStream("message.txt");
        

        req.on('data', (data) => {
    
            body += data;
            writeStream.write(data);
        });
    
    
        req.on('end', () => {
    
            res.writeHead(200, {'Content-Type' : 'text/html'});
    
            res.write(body, () => {
    
                res.end();
    
            });
    
        });
        
    } 
    
    else {
        res.writeHead(404, {'Content-Type' : 'text/html'});
            
            res.end(`<h1>404 ERROR could not find that Page</h1>`);
    }

}).listen(8080);

console.log('Server is Running');