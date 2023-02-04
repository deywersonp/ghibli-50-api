import { Module } from '@nestjs/common';
import { AddFilmsFromStudioGhibli } from '@application/use-cases/add-films-from-studio-ghibli';
import { DatabaseModule } from '@infra/database/database.module';
import { AxiosApiModule } from '@infra/external-api/axios/axios.module';
import { FilmsController } from './controllers/films.controller';

@Module({
  imports: [DatabaseModule, AxiosApiModule],
  controllers: [FilmsController],
  providers: [AddFilmsFromStudioGhibli],
})
export class HttpModule {}
