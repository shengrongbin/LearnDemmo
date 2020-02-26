const koa=require("koa");
const app =new koa();
const axios=require("axios");
app.use(async ctx=>{
    console.log(3);
    ctx.body="hello world"
})
console.log(2);
app.listen(8080)