export type Method = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

export type RequestObject = {
  url: string;
  method: Method;
  data?: object;
  headers?: object;
};
