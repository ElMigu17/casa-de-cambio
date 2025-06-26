import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Converter } from './converter.component';

describe('Converter', () => {
  let component: Converter;
  let fixture: ComponentFixture<Converter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Converter],
    }).compileComponents();

    fixture = TestBed.createComponent(Converter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update currency value with set()', () => {
    component.inputs.set = 3;
    component.currentChoices.set = 'TIB';
    component.set();
    expect(component.currencyGoldValue['TIB']).toBe(3);
  });

  it('should convert values correctly', () => {
    component.inputs.qtd = 2;
    component.currencyGoldValue['tib'] = 1;
    component.currencyGoldValue['ore'] = 2.5;
    component.currentChoices.qtd = 'TIB';
    component.currentChoices.converted = 'ORE';
    component.convert(component.inputFieldEnum.QTD);
    expect(component.inputs.converted).toBeCloseTo(5);
  });

  it('should convert two currencys', () => {
    expect(component.convertFormula(3, 4, 2)).toBe(6);
  });
});
