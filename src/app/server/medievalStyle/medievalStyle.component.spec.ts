import { MedievalStyle } from './medievalStyle';

describe('ConversionsService', () => {
  let service: MedievalStyle;

  beforeEach(async () => {
    service = new MedievalStyle();
  });

  it('should return false as medievalStyle value', () => {
    expect(service.getValue()()).toBe(false);
  });
  it('should switch medievalStyle value', () => {
    expect(service.getValue()()).toBe(false);
    service.switch();
    expect(service.getValue()()).toBe(true);
  });
});
