import { Injectable } from '@nestjs/common';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UsersService } from '../../modules/users/users.service';
import { CreateUserDto } from '../../modules/users/dto/create-user.dto';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly usersService: UsersService) {}

  validate(email: string) {
    if (!this.usersService) {
      console.error('UsersService is not injected');
      return false;
    }

    const user = this.usersService.findOne(email);
    return !user;
  }

  defaultMessage(): string {
    return 'Email is already taken';
  }
}

export function IsEmailUnique(validationOptions?: ValidationOptions) {
  return function (object: CreateUserDto, propertyName: string) {
    registerDecorator({
      name: 'IsEmailUnique',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsEmailUniqueConstraint,
    });
  };
}
