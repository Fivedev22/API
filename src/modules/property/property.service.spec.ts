import { Test, TestingModule } from '@nestjs/testing';
import { ApartmentService } from './property.service';

describe('ApartmentService', () => {
  let service: ApartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApartmentService],
    }).compile();

    service = module.get<ApartmentService>(ApartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
