import { Controller, Put, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { DrugsService } from './drugs.service';//'../drugs/drugs.service';
import { CreateDrugDto } from './dto/create-drug.dto';//'../drugs/dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';//'../drugs/dto/update-drug.dto';

@Controller('drugs')
export class DrugsController {
  constructor(private readonly drugsService: DrugsService) {}

  @Post()
  create(@Body() createDrugDto: CreateDrugDto) {
    return this.drugsService.create(createDrugDto);
  }

  @Get()
  findAll() {
    return this.drugsService.findAll();
  }
//---------------------
@Put('/:name')
async updateDrug(@Res() response,@Param('name') drugName: string,
@Body() updateDrugDto: UpdateDrugDto) {
  try {
   const existingDrug = await this.drugsService.updateDrug(drugName, updateDrugDto);
  return response.status(HttpStatus.OK).json({
  message: 'Drug has been successfully updated',
  existingDrug,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}

@Get('/:name')
async getDrug(@Res() response, @Param('name') drugName: string) {
 try {
    const existingDrug = await
this.drugsService.getDrug(drugName);
    return response.status(HttpStatus.OK).json({
    message: 'Drug found successfully',existingDrug,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Delete('/:name')
async deleteDrug(@Res() response, @Param('name') drugName: string)
{
  try {
    const deletedDrug = await this.drugsService.deleteDrug(drugName);
    return response.status(HttpStatus.OK).json({
    message: 'Drug deleted successfully',
    deletedDrug,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }

//========================
}
