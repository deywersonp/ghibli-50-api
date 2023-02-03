import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GhibliFilmsService } from './ghibli.films.service';
import { StudioGhibliService } from 'src/application/services/studio-ghibli-service';

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: StudioGhibliService,
      useClass: GhibliFilmsService,
    },
  ],
  exports: [StudioGhibliService],
})
export class AxiosApiModule {}
