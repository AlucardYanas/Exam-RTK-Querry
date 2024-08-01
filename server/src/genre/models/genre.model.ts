import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Track } from 'src/tracks/models/tracks.models';

@Table
export class Genre extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @HasMany(() => Track)
  tracks: Track[];
}
