import { z } from 'zod';

export const trackSchema = z
  .object({
    group: z.string(),
    title: z.string(),
    img: z.string(),
    genre_id: z.number(),
  })
  .required();

export const fullTrackSchema = z
  .object({
    id: z.number(),
  })
  .merge(trackSchema);

export const trackCreateSchema = trackSchema.omit({ genre_id: true });

export const allTracksSchema = z.array(fullTrackSchema);

export const trackIdSchema = z.object({
  id: z.string().transform((val) => {
    const num = parseInt(val, 10);
    if (isNaN(num)) {
      throw new Error('Invalid ID format, must be a number');
    }
    return num;
  }),
});

export type TrackCreateDto = z.infer<typeof trackCreateSchema>;
export type TrackDto = z.infer<typeof trackSchema>;
export type TrackIdDto = z.infer<typeof trackIdSchema>;
export type FullTrackDto = z.infer<typeof fullTrackSchema>;
