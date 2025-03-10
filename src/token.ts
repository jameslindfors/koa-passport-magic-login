import jwt from 'jsonwebtoken';

type JwtPayload = {
  destination: string;
  code: string;
  [key: string]: any;
};

export const decodeToken = (secret: string, token?: string) => {
  if (typeof token !== 'string') throw new Error('No token provided');

  return jwt.verify(token, secret);
};

export const generateToken = (secret: string, payload: JwtPayload) =>
  jwt.sign(payload, secret, {
    expiresIn: '60min',
  });
