const http=require("http");
const app =require("./backend/app");

const server =http.createServer(app);

var port=process.env.PORT;

if(port=="" || port==null){
    port=3000;
}

server.listen(port, ()=>{
    console.log(port);
});
