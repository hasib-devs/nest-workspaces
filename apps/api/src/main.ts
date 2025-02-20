import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 8100, () => {
    console.log('App is running on http://localhost:8100');
  });
}
bootstrap();
