import Google from '@auth/core/providers/google';
import { Auth } from '@auth/core';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const response = await Auth(context.request, {
    secret: import.meta.env.AUTH_SECRET,
    providers: [
      Google({
        clientId: import.meta.env.GOOGLE_CLIENT_ID,
        clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    trustHost: true,
  });

  return response;
};

export const POST = GET;
