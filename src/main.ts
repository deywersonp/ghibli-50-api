import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@infra/app.module';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    exposedHeaders: 'x-total-count',
  });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Ghibli.50 API')
    .setDescription(
      'Está API cadastra e retorna informações sobre os filmes do Studio Ghibli.',
    )
    .setContact(
      'Deywerson Pereira',
      'https://github.com/deywersonp',
      'deywerson.pereira@gmail.com',
    )
    .setVersion('1.0.0')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (_: string, methodKey: string) => methodKey,
  };

  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Ghibli.50 API',
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('/', app, document, customOptions);

  await app.listen(3333);
}

bootstrap();
