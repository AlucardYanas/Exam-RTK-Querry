import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModuleAsyncOptions } from '@nestjs/sequelize';
import { Genre } from 'src/genre/models/genre.model';
import { Track } from 'src/tracks/models/tracks.models';

export const sequelizeConfig = (): SequelizeModuleAsyncOptions => {
  return {
    inject: [ConfigService],
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      dialect: 'postgres',
      host: configService.get('DB_HOST'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      logging: false,
      synchronize: false,
      models: [Genre, Track],
    }),
  };
};
