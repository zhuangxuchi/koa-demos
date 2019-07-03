const Koa = require('koa');
const app = new Koa();

const main=ctx=>{
  if(ctx.request.accepts('xml')){
    ctx.response.type='xml';
    ctx.response.body='<data>Hello xml</data>';
  }else if(ctx.request.accepts('json')){
    ctx.response.type='json';
    ctx.response.body={ data: 'Hello json' };
  }else if(ctx.request.accepts('html')){
    ctx.response.type='html';
    ctx.response.body='<p>Hello World</p>';
  }else{
    ctx.response.type='text';
    ctx.response.body='Hello text';
  }
};

app.use(main);
app.listen(3000);
