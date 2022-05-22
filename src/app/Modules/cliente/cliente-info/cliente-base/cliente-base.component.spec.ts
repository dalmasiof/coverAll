import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteBaseComponent } from './cliente-base.component';

describe('ClienteBaseComponent', () => {
  let component: ClienteBaseComponent;
  let fixture: ComponentFixture<ClienteBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
