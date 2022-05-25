import { createServer, Model } from 'miragejs';
/* Factories */
import postFactory from '@/mirage/factories/post';
import userFactory from '@/mirage/factories/user';
/* Routes */
import { userRoutes } from '@/mirage/routes/user';
import { postRoutes } from '@/mirage/routes/post';

export function makeServer({ environment = 'development' } = {}) {
  console.log('Starting mirage...');

  return createServer({
    models: {
      user: Model,
      post: Model,
    },

    factories: {
      user: userFactory,
      post: postFactory,
    },

    seeds(server) {
      server.createList('post', 10);
      server.create('user', {
        email: 'demo@demo.com',
        password: 'demo',
        name: 'Demo User',
      });
    },

    routes() {
      console.log('Mirage: Setting routes...');

      // this.passthrough('/ui-assets/**');
      this.passthrough('/__open-in-editor');

      this.namespace = '/api/v1';

      userRoutes(this);
      postRoutes(this);
    },
  });
}
