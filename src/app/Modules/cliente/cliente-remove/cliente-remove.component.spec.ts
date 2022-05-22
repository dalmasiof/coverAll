import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteRemoveComponent } from './cliente-remove.component';

describe('ClienteRemoveComponent', () => {
  let component: ClienteRemoveComponent;
  let fixture: ComponentFixture<ClienteRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
