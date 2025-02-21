import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { MikroService } from './mikro.service';
import { MediaEntity } from './entities/media.entity';
import { MongoDriver } from '@mikro-orm/mongodb';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [MediaEntity],
      driver: MongoDriver,
      clientUrl: 'mongodb://localhost:27017/nest-quickstart',
      debug: true,
    }),
  ],
  providers: [MikroService],
  exports: [MikroService],
})
export class MikroModule {}
