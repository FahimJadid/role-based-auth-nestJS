import { Role } from './role.enum';

export interface User {
  userId: number; // 1
  username: string; // 'john doe'
  password: string; // 12345
  roles: Role[]; // [Role.user]
}
