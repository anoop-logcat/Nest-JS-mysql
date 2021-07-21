import { IsInt, IsString } from 'class-validator';

export class FeedsDTO {

    @IsString()
    postDescription: string;

    @IsString()
    postImage: string;

    @IsInt()
    likes: number;

    @IsInt()
    ownerID: number;
}