import { GeoCodeService } from './app.service';
import { GeoCodeController } from './app.controller';
import { Test } from '@nestjs/testing';
import { getAddressComponents } from './app.helpers';

describe('GeoCodeController', () => {
  let controller: GeoCodeController;
  let service: GeoCodeService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [GeoCodeController],
      providers: [GeoCodeService],
    }).compile();

    service = moduleRef.get<GeoCodeService>(GeoCodeService);
    controller = moduleRef.get<GeoCodeController>(GeoCodeController);
  });

  const cases = [
    {
      title: 'Should return San Carlos, CA, US',
      code: '94070',
      result: {
        locality: 'San Carlos',
        state: 'California',
        country: 'United States',
      },
    },
    {
      title: 'Should return Chennai, TN, IN',
      code: '600044',
      result: {
        locality: 'Chennai',
        state: 'Tamil Nadu',
        country: 'India',
      },
    },
  ];

  describe('Zipcode: 94070', () => {
    const result = {
      locality: 'San Carlos',
      state: 'California',
      country: 'United States',
    };
    for (const i of cases) {
      it(i.title, async () => {
        await expect(
          Promise.resolve(controller.getPlace({ postcode: i.code })),
        ).resolves.toStrictEqual(i.result);
      });
    }
    // it('Should return San Carlos, CA, US', async () => {
    //   controller.getPlace({ postcode: '94070' }).then((output) => {
    //     expect(output).toStrictEqual(result);
    //   });
    // });

    // it('Should not return San Carlos, CA, US', async () => {
    //   await expect(
    //     Promise.resolve(controller.getPlace({ postcode: '600044' })),
    //   ).resolves.toBe(result);
    // });
  });
});
