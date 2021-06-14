import {Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalsController } from './animals.controller';
import { AnimalSchema } from './animals.model';
import { AnimalsService } from './animals.service';


@Module({
    imports:[MongooseModule.forFeature([{name:'Animal', schema: AnimalSchema }]),],

    controllers: [AnimalsController],
    providers:[AnimalsService]

})
export class AnimalsModule {

}