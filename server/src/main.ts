import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Music API')
    .setVersion('1.0')
    .addServer('/api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.setGlobalPrefix('api');
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
