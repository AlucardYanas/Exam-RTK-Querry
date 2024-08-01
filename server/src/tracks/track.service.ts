import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Track } from './models/tracks.models';
import { TrackDto } from './dto/track.dto';

@Injectable()
export class TrackService {
  constructor(@InjectModel(Track) private track: typeof Track) {}

  async getTrackById(id: number) {
    return this.track.findByPk(id);
  }

  async getTracksByGenreId(id: number) {
    return this.track.findAll({
      where: {
        genre_id: id,
      },
    });
  }

  async createTrack(data: TrackDto) {
    return this.track.create(data);
  }

  async updateTrack(id: number, data: TrackDto) {
    await this.track.update(data, {
      where: {
        id,
      },
    });

    return this.track.findByPk(id);
  }

  async deleteTrack(id: number) {
    return this.track.destroy({
      where: {
        id,
      },
    });
  }
}
