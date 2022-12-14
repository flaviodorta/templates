import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Video } from './Video';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => Video, (video) => video.room)
  videos: Video[];
}
