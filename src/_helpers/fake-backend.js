import { ok } from "assert";
import CARDS from '../CARDS';

export function configureFakeBackend() {
  let users = [{ id: 1, username: 'test', password: 'test' }, { id: 2, username: 'test2', password: 'test2' }];
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    const isLoggedIn = opts.headers['Authorization'] === 'Bearer fake-jwt-token';

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        if (url.endsWith('/cards') && opts.method === 'GET') {
          return resolve(CARDS);
        }

        if (url.endsWith(`/users/authenticate`) && opts.method === 'POST') {
          const params = JSON.parse(opts.body);
          const user = users.find(x => x.username === params.username && x.password === params.password);
          if(!user) return error('Username or Password incorrect');
          return ok({
            id: user.id,
            username: user.username,
            token: 'fake-jwt-token'
          });
        }

        if (url.endsWith('/users') && opts.method === 'GET') {
          if (!isLoggedIn) return unauthorised();
          return ok(users);
        }

        if (url.endsWith(`/create-game`) && opts.method === 'POST') {
          const roomId = 'test-room'
          const params = JSON.parse(opts.body);
          const urls = Object.values(params).map(x => `localhost:3001/game/${roomId}/${x}`)
           
          return resolve(urls)
        }
        
        realFetch(url, opts).then(response => resolve(response));

        function ok(body) { 
          resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
        }

        function unauthorised() {
          resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'no good here'})) })
        }

        function error(message) {
          resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
        }
      }, 500);
    });
  }
}