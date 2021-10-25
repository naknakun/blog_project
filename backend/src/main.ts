import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  setupSwagger(app);

  await app.listen(3000);
  console.log(`Application is running on: \x1b[36m${await app.getUrl()}\x1b[m`);
}
bootstrap();
