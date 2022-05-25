import type { Server } from 'miragejs/server';
import { randUuid } from '@ngneat/falso';
import type { AppSchema } from '../types';

export function postRoutes(server: Server) {
  server.get('/post/list', (schema: AppSchema) => schema.all('post'));

  server.put('/post', (schema: AppSchema, request) => {
    const body = JSON.parse(request.requestBody);
    const { title, content } = body;

    return schema.create('post', {
      title,
      content,
      date: new Date(),
      uuid: randUuid(),
    });
  });

  server.delete('/post/:uuid', (schema: AppSchema, request) => {
    const { uuid } = request.params;

    return schema.where('post', { uuid }).destroy();
  });
}
