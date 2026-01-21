import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compound } from './compound';

describe('Compound', () => {
  let component: Compound;
  let fixture: ComponentFixture<Compound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
