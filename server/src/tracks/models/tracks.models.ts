import {
  Column,
  Model,
  Table,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Genre } from 'src/genre/models/genre.model';

@Table
export class Track extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  group: string;

  @Column
  title: string;

  @Column
  img: string;

  @ForeignKey(() => Genre)
  @Column
  genre_id: number;

  @BelongsTo(() => Genre)
  genre: Genre;
}
