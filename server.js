const http=require("http");
const app =require("./backend/app");

const server =http.createServer(app);

var PORT=process.env.PORT;

server.listen(PORT || 3000, ()=>{
    console.log("check 3000");
});
