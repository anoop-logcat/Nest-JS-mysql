import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('feeds')
export class FeedsEntity {
    @PrimaryGeneratedColumn()
    feedID: number;

    @Column({
        type: 'varchar',
        default: 0
    })
    feedDescription: string;

    @Column()
    feedImage: string;

    @Column({
        type: 'int',
        default: 0
    })
    likes: number;

    @ManyToOne(type => UserEntity, user => user.posts)
    owner: UserEntity;
}