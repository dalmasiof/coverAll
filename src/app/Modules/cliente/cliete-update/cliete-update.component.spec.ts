import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClieteUpdateComponent } from './cliete-update.component';

describe('ClieteUpdateComponent', () => {
  let component: ClieteUpdateComponent;
  let fixture: ComponentFixture<ClieteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClieteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClieteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
