import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://web.postman.co', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],

    // allowedHeaders: ['Access-Control-Allow-Origin'],
  });

  // app.use(
  //   cors({
  //     origin: 'http://localhost:3000', // Поміняйте http://localhost:3000 на ваш фронтенд домен
  //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  //     allowedHeaders: ['Content-Type', 'Authorization'],
  //   }),
  // );

  const config = new DocumentBuilder()
    .setTitle('WordSmith test')
    .setDescription('API description for the WordSmith test task')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(5000);
}
bootstrap();
