import { User } from './user.model';
export interface AuthResponse {
  token: string;
  user: User;
}
export interface LoginCredentials {
  username: string;
  password: string;
}
