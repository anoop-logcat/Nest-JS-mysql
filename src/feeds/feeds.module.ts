import { FeedsController } from './feeds.controller';
import { FeedsService } from './feeds.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { FeedsEntity } from 'src/entity/feeds.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, FeedsEntity])],
    controllers: [FeedsController,],
    providers: [FeedsService],
})
export class FeedsModule { }
