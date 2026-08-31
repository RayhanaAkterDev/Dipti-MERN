// NODE JS

const http = require("http");
const url = require("url");

// request server e jay, response server theke ashe

// client, server, req, res, method, body, header

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    const parsUrl = url.parse(req.url, true);
    const path = parsUrl.pathname;

    if (path === "/" && req.method === "GET") {
        res.writeHead(200);
        res.end(JSON.stringify({ msg: "Hello Sumaya" }));
    } else if(path === '/about' && req.method === Get){
        res.writeHead(200);
        res.end(JSON.stringify({msg: "About page"}))
    }else if (path === "/add-user" && method === "POST"){
        let body = "";
        req.on("data", chunk => body += chunk)
    } else{
        res.writeHead(404)
        res.end("Page not found")
    }
});

server.listen(4000, () => {
    console.log("Server is running");
});