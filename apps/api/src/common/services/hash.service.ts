import { EnvSchema } from '@libs/common-library/validators/env.validator';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';

@Injectable()
export class HashService {
  protected hashSecret: Buffer;
  protected hashSalt: Buffer;
  constructor(protected configService: ConfigService<EnvSchema>) {
    this.hashSecret = Buffer.from(
      this.configService.get<string>('HASH_SECRET') || 'super-hash-secret',
    );
    this.hashSalt = Buffer.from(
      this.configService.get<string>('HASH_SALT') || 'super-hash-salt',
    );
  }

  async generateHash(value: string): Promise<string> {
    try {
      return await argon2.hash(value, {
        salt: this.hashSalt,
        secret: this.hashSecret,
        type: argon2.argon2id,
      });
    } catch (error) {
      console.error(`Error making hash: ${error}`);
      return value;
    }
  }

  async compareHash(hash: string, value: string): Promise<boolean> {
    try {
      return await argon2.verify(hash, value, {
        secret: this.hashSecret,
      });
    } catch (error) {
      console.error(`Error comparing hash: ${error}`);
      return false;
    }
  }
}
