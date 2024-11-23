const http = require("http")

// const PORT = process.env.PORT;

const PORT = 2000;

// const hostname = "localhost";

const fs = require("fs")

const home = fs.readFileSync("./index.html", "utf-8")

const server = http.createServer((req,res,next) => {

    if(req.url==="/")
    {
        return res.end(home)
    }
    else if(req.url==="/about")
    {
        return res.end("<h1>About Page</h1>");
    }
    else if(req.url=== "/service")
    {
        return res.end("<h1>Service Page</h1>")
    }

    else if(req.url==="/menu")
    {
        return  res.end("<h1>Menu Page</h1>")
    }
    else{
        return res.end("404 Page not found");
    }
    

    
})

server.listen(PORT,hostname,()=> {

    console.log(`srever is working on http://${hostname}:${PORT}`);
    
})

// server.listen(PORT,()=> {

//     console.log(`srever is working`);
    
// })

// console.log(__dirname);

// console.log(__filename);

