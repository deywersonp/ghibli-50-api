import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GhibliFilmsModule } from './ghibli.films.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [GhibliFilmsModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
