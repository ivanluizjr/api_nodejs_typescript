import { UserEntity } from "../entities/user_entity";

export interface IUserRepository {
  createUser(user: UserEntity): Promise<UserEntity>;
  getUserById(user_id: string): Promise<UserEntity | null>;
  getUserByName(name: string): Promise<UserEntity | null>;
  getUserByDateBirth(date_birth: Date): Promise<UserEntity | null>;
  getUserByAge(age: number): Promise<UserEntity | null>;
  getAllUsers(): Promise<UserEntity[]>;
  updateUser(user: UserEntity): Promise<UserEntity>;
  deleteUser(user_id: string): Promise<void>;
}