import { NestFactory } from '@nestjs/core';
import { ApiModule } from '@api/api.module';
import { useContainer } from 'class-validator';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { validationExceptionFactory } from '@api/common/pipes/validation-exception';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  app.use(helmet());

  // Tell class-validator to use NestJS container
  useContainer(app.select(ApiModule), { fallbackOnErrors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      errorHttpStatusCode: 422,
      whitelist: true,
      stopAtFirstError: true,
      exceptionFactory: validationExceptionFactory,
    }),
  );

  await app.listen(process.env.PORT ?? 8100, () => {
    console.log('App is running on http://localhost:8100');
  });
}

bootstrap();
