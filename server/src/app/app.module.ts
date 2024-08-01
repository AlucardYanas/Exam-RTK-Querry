import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './configs/sequelize.config';
import { GenreModule } from 'src/genre/genre.module';
import { ConfigModule } from '@nestjs/config';
import { TrackModule } from 'src/tracks/track.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync(sequelizeConfig()),
    GenreModule,
    TrackModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
