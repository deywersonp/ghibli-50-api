"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./infra/app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        exposedHeaders: 'x-total-count',
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Ghibli.50 API')
        .setDescription('Está API cadastra e retorna informações sobre os filmes do Studio Ghibli.')
        .setContact('Deywerson Pereira', 'https://github.com/deywersonp', 'deywerson.pereira@gmail.com')
        .setVersion('1.0.0')
        .build();
    const options = {
        operationIdFactory: (_, methodKey) => methodKey,
    };
    const customOptions = {
        customSiteTitle: 'Ghibli.50 API',
    };
    const document = swagger_1.SwaggerModule.createDocument(app, config, options);
    swagger_1.SwaggerModule.setup('/', app, document, customOptions);
    await app.listen(3333);
}
bootstrap();
//# sourceMappingURL=main.js.map