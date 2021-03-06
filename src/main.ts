import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from 'src/modules';
import { ServerConfigType, SERVER_CONFIG } from 'src/config'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const { port } = configService.get<ServerConfigType>(SERVER_CONFIG);
  await app.listen(port);
}

bootstrap();
