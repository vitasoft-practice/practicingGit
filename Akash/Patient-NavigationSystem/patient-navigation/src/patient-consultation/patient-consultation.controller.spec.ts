import { Test, TestingModule } from '@nestjs/testing';
import { PatientConsultationController } from './patient-consultation.controller';
import { PatientConsultationService } from './patient-consultation.service';

describe('PatientConsultationController', () => {
  let controller: PatientConsultationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientConsultationController],
      providers: [PatientConsultationService],
    }).compile();

    controller = module.get<PatientConsultationController>(PatientConsultationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
