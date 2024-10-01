import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Drug } from '../schemas/drug.schema';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';

@Injectable()
export class DrugsService {

  constructor(@InjectModel(Drug.name) private drugModel: Model<Drug>) {}

  async create(createDrugDto: CreateDrugDto): Promise<Drug> {
    const createdDrug = new this.drugModel(createDrugDto);
    return await createdDrug.save();
  }

  async findAll() : Promise<Drug[]> {
    const drugs = await this.drugModel.find();
    return drugs;
  }
//==========================

async updateDrug(drugName: string, updateDrugDto: UpdateDrugDto): Promise<Drug> {
  const existingDrug = await        this.drugModel.findOneAndUpdate({ name: drugName }, updateDrugDto, { new: true });
 if (!existingDrug) {
   throw new NotFoundException(`Drug #${drugName} not found`);
 }
 return existingDrug;
}

async getDrug(drugName: string): Promise<Drug> {
  const existingDrug = await     this.drugModel.findOne({ name: drugName }).exec();
  if (!existingDrug) {
   throw new NotFoundException(`Drug #${drugName} not found`);
  }
  return existingDrug;
}
async deleteDrug(drugName: string): Promise<Drug> {
   const deletedDrug = await this.drugModel.findOneAndDelete({ name: drugName });
  if (!deletedDrug) {
    throw new NotFoundException(`Drug #${drugName} not found`);
  }
  return deletedDrug;
}

}
