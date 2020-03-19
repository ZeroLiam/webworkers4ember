const server = require('server');
const { get, post } = server.router;
const { render, json } = server.reply;
const opt = {
    port: 3007,
    public: 'public',
    engine: 'pug',
    favicon: './favicon.ico',
    env: 'development'   // Remember this is "env" and not "node_env" here
  };

  server(
    opt,
    get('/', () => render('index.pug')),
    post('/', ctx => {
        console.log(ctx.data);
        return redirect('/');
    })
  );