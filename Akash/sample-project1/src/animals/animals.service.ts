import { Injectable , NotFoundException} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { type } from "os";
import { resourceLimits } from "worker_threads";
import { Animal } from "./animals.model";


@Injectable()
export class AnimalsService {

    constructor(
        @InjectModel('Animal') private readonly AnimalModel : Model<Animal>,
    ){}

    async addNewAnimal (name: string, category: string, age : Number){
        const newAnimal = new this.AnimalModel({
            name,
            category,
            age,
        });
        const result = await newAnimal.save();
        return result.id as string;
    }

    async getAnimals(){
        const Animals = await this.AnimalModel.find().exec();
        return Animals.map(Animal => ({
            id : Animal.id,
            name : Animal.name,
            category : Animal.category,
            age : Animal.age,
        }));
    }

    async getSingleAnimal(AnimalId : string){
        const Animal = await this.findAnimal(AnimalId);
        return {
            id: Animal.id,
            name: Animal.name,
            category: Animal.category,
            age : Animal.age,
        };
    }

    async updateAnimal(
        AnimalId : string,
        name : string,
        category: string,
        age :number,
    ){
        const updatedAnimal = await this.findAnimal(AnimalId);
        if(name){
            updatedAnimal.name = name;
        }
        if(category){
            updatedAnimal.category = category;
        }
        if(age){
            updatedAnimal.age = age;
        }
        updatedAnimal.save();
    }

    async deleteAnimal(AnimalId: string){
        const feedback = await this.AnimalModel.deleteOne({_id: AnimalId}).exec();
        if (feedback.n === 0){
            throw new NotFoundException('Ánimal Not found');
        }
    }


    private async findAnimal(id: string): Promise<Animal> {
        let animal;
        try{
            animal =await this.AnimalModel.findById(id).exec();
        } catch (error){
            throw new NotFoundException('Animal not found');
        }
        if(!animal){
            throw new NotFoundException('Animal not found');
        }
        return animal;
    }



}