import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { MikroService } from './mikro.service';
import mikroOrmConfig from './mikro-orm.config';

@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmConfig)],
  providers: [MikroService],
  exports: [MikroService],
})
export class MikroModule {}
