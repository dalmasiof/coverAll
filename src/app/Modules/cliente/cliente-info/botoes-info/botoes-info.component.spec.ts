import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesInfoComponent } from './botoes-info.component';

describe('BotoesInfoComponent', () => {
  let component: BotoesInfoComponent;
  let fixture: ComponentFixture<BotoesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
