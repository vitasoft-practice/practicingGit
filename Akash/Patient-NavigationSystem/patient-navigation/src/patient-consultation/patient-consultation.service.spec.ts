import { Test, TestingModule } from '@nestjs/testing';
import { PatientConsultationService } from './patient-consultation.service';

describe('PatientConsultationService', () => {
  let service: PatientConsultationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientConsultationService],
    }).compile();

    service = module.get<PatientConsultationService>(PatientConsultationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
