import { ConversionsService } from './conversionsService';

describe('ConversionsService', () => {
  let service: ConversionsService;

  beforeEach(async () => {
    service = new ConversionsService();
  });

  it('should add and retrieve convertions', () => {
    expect(service.getValue()().length).toBe(0);
    service.addConvertion({
      id: 0,
      originCurrency: 'ORE',
      targetCurrency: 'TIB',
      value: 2.5,
      dateTime: new Date(),
    });
    expect(service.getValue()().length).toBe(1);
  });
  it('should add and retrieve convertions', () => {
    expect(service.getNewId()).toBe(0);
    service.addConvertion({
      id: 0,
      originCurrency: 'ORE',
      targetCurrency: 'TIB',
      value: 2.5,
      dateTime: new Date(),
    });
    expect(service.getNewId()).toBe(1);
  });
});
