import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GhibliFilmsService } from './ghibli.films.service';

@Module({
  imports: [HttpModule],
  providers: [GhibliFilmsService],
  exports: [GhibliFilmsService],
})
export class GhibliFilmsModule {}
