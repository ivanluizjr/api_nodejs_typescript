export class UserEntity {
  user_id: number;
  name: string;
  date_birth: Date;
  age: number;

  constructor(userId: number, name: string, date_birth: Date, age: number) {
    this.user_id = userId;
    this.name = name;
    this.date_birth = date_birth;
    this.age = age;
  }
}