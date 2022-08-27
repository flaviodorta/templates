import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('videos')
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable:  })
  title: string;

  @Column({ type: 'text'})
  url: string;
}
