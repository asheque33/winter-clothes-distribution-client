export interface IRegisterUser {
  name: string;
  email: string;
  role?: string;
  password: string;
}
export interface ILoggedInUser {
  email: string;
  password: string;
}
