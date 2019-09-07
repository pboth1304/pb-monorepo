import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/v1/travelency';

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: environment.production ? true : false
    })
  );

  const port = process.env.port || 3333;

  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
