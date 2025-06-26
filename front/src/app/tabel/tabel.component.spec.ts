import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabel } from './tabel.component';

describe('Tabel', () => {
  let component: Tabel;
  let fixture: ComponentFixture<Tabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabel],
    }).compileComponents();

    fixture = TestBed.createComponent(Tabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize rowData from service', () => {
    expect(Array.isArray(component.rowData)).toBeTrue();
  });
});
