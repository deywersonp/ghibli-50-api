import { IsNotEmpty } from 'class-validator';

export class CreateMovieBody {
  @IsNotEmpty()
  ghibli_id: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  producer: string;

  @IsNotEmpty()
  director: string;

  @IsNotEmpty()
  banner: string;
}
