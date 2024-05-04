import { Session } from 'next-auth';

interface User {
  name: string;
  email: string;
  image: string;
  role: string; // Custom property
}

declare module 'next-auth' {
  interface Session {
    user: User;
  }
}