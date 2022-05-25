import { Response } from 'miragejs';
import type { Server } from 'miragejs/server';
import type { AppSchema } from '../types';

export function userRoutes(server: Server) {
  let loginTriesCounter = 0;

  server.post('/login', (schema: AppSchema, request) => {
    const body = JSON.parse(request.requestBody);
    const { email } = body;

    if (loginTriesCounter >= 5) {
      return new Response(
        401,
        {},
        {
          error: 'Locked out',
          message: 'You have been locked out from the system',
        },
      );
    }

    if (email.includes('invalid')) {
      loginTriesCounter += 1;

      return new Response(
        401,
        {},
        {
          error: 'Unauthorized',
          message: 'Invalid credentials',
        },
      );
    }

    loginTriesCounter = 0;

    return {
      user: schema.findBy('user', { email }).attrs,
    };
  });
}
