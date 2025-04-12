import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntryRoom {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    default: 'No DaTA',
  })
  entry_room: string;
}
