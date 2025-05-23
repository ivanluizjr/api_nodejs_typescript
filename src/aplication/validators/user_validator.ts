import { UserEntity } from "../../domain/entities/user_entity";

export class UserValidator {
  static validateUserId(user_id: number): boolean {
    if (user_id <= 0) {
      throw new Error("User ID não encontrado.");
    }
    return true;
  }

  static validateName(name: string): boolean {
    if (!name || name.length < 3) {
      throw new Error("O nome deve ter pelo menos 3 caracteres.");
    }
    return true;
  }

  static validateDateBirth(date_birth: Date): boolean {
    const today = new Date();
    if (date_birth >= today) {
      throw new Error("A data de nascimento não pode ser maior ou igual a data atual.");
    }
    return true;
  }

  static validateAge(age: number): boolean {
    if (age <= 0) {
      throw new Error("A idade deve ser maior que 0.");
    }
    return true;
  }

  static validate(data: UserEntity): { isValid: boolean, errors: string[] } {
    const errors: string[] = [];
    let isValid = true;

    try {
      this.validateUserId(data.user_id);
    } catch (error) {
      isValid = false;
      errors.push(error.message);
    }

    try {
      this.validateName(data.name);
    } catch (error) {
      isValid = false;
      errors.push(error.message);
    }

    try {
      this.validateDateBirth(data.date_birth);
    } catch (error) {
      isValid = false;
      errors.push(error.message);
    }

    try {
      this.validateAge(data.age);
    } catch (error) {
      isValid = false;
      errors.push(error.message);
    }

    return { isValid, errors };
  }
}