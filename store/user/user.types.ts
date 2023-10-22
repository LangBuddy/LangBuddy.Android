export type UserState = {
  isLogin?: boolean;
  token?: string;
  refreshToken?: string;
};

export type AuthenticateBody = {
  email?: string;
  password?: string;
};

export type AuthenticateResponse = {
  token?: string;
  refreshToken?: string;
};

export type AuthenticateFailResponse = {
  isLogin?: boolean;
};
