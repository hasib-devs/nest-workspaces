import { EnvSchema } from '@libs/common-library/validators/env.validator';
import { MongoDriver } from '@mikro-orm/mongodb';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as entities from './entities';
import { MikroService } from './mikro.service';
@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService<EnvSchema>) => {
        const host = configService.get<string>('NOSQL_DB_HOST');
        const port = configService.get<number>('NOSQL_DB_PORT');
        const user = configService.get<string>('NOSQL_DB_USER');
        const password = configService.get<string>('NOSQL_DB_PASSWORD');
        const db = configService.get<string>('NOSQL_DB_NAME');

        const clientUrl =
          user && password
            ? `mongodb://${user}:${encodeURIComponent(password)}@${host}:${port}/${db}`
            : `mongodb://${host}:${port}/${db}`;
        return {
          driver: MongoDriver,
          clientUrl,
          entities: [...Object.values(entities)],
        };
      },
    }),
  ],
  providers: [MikroService],
  exports: [MikroService],
})
export class MikroModule {}
