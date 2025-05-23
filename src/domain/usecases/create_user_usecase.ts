import { ICreateUserDTO } from "../../aplication/dtos/i_create_user_dto";
import { UserEntity } from "../entities/user_entity";
import { IUserRepository } from "../repositories/i_user_repository";

export class CreateUserUsecase {
  constructor(private userRepository: IUserRepository) { }

  async execute(userData: ICreateUserDTO): Promise<UserEntity> {
    const user = new UserEntity(
      userData.user_id,
      userData.name,
      userData.date_birth,
      userData.age
    );

    return await this.userRepository.createUser(user);
  }
}