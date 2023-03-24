import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GhibliMoviesService } from './ghibli.movies.service';
import { StudioGhibliService } from '@application/services/studio-ghibli-service';

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: StudioGhibliService,
      useClass: GhibliMoviesService,
    },
  ],
  exports: [StudioGhibliService],
})
export class AxiosApiModule {}
