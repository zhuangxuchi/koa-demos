const Koa = require('koa');
const app = new Koa();
const route=require('koa-route');

const about=ctx=>{
  ctx.response.type='html';
  ctx.response.body='<a href="/">Index Page</a>';
};

const main=ctx=>{
  ctx.response.type='html';
  ctx.response.body='<a href="/about">Hello World</a>';
}

app.use(route.get('/',main));
app.use(route.get('/about',about));

app.listen(3000);
