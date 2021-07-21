import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FeedsEntity } from './feeds.entity';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    userID: number;

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    username: string;

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    password: string;

    @Column()
    profileImage: string;

    @Column()
    bio: string;

    @OneToMany(type => FeedsEntity, post => post.owner)
    posts: FeedsEntity[]
}