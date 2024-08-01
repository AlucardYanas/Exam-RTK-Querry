import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Track } from './models/tracks.models';
import { TrackService } from './track.service';

@Module({
  imports: [SequelizeModule.forFeature([Track])],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
