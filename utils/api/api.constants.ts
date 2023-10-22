export enum ApiList {
  Login = 'Login',
}

export enum ApiMethods {
  POST = 'POST',
  PATCH = 'PATCH',
  GET = 'GET',
  DELETE = 'DELETE',
}

export const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};
