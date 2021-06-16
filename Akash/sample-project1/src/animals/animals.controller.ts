
import { Body, Controller, Post, Get, Patch, Param, Delete, } from '@nestjs/common';
import { AnimalsService } from './animals.service';

@Controller('animals')
export class AnimalsController {
    
    constructor(private readonly AnimalsService : AnimalsService){}

    @Post()
    async addAnimal(
        @Body('name') name : string,
        @Body('category') category : string,
        @Body('age') age : number,
    ){
        const genid = await this.AnimalsService.addNewAnimal(name,category,age);
        return {id : genid};
    }

    @Get()
    async getAllAnimals(){
        const Animals = await this.AnimalsService.getAnimals();
        return Animals;
    }

    @Get(':id')
    getAnimals(@Param('id') AnimalId: string){
        return this.AnimalsService.getSingleAnimal(AnimalId);
    }

    @Patch(':id')
    async updateAnimal(
        @Param('id') AnimalId : string,
        @Body('name') AnimalName : string,
        @Body('category') AnimalCategory : string,
        @Body('age') AnimalAge : number,
    ){
       const updated = await this.AnimalsService.updateAnimal(AnimalId,AnimalName,AnimalCategory,AnimalAge);
        return updated;
    }

    @Delete(':id')
    async removeAnimal(@Param('id') AnimalId : string){
        await this.AnimalsService.deleteAnimal(AnimalId);
        return null;
    }

}
