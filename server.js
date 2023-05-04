const http=require("http");
const app =require("./backend/app");

const server =http.createServer(app);

var port=process.env.PORT;

server.listen(port, ()=>{
    console.log(port);
});
