import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerInformationComponent } from './consumer-information.component';

describe('ConsumerInformationComponent', () => {
  let component: ConsumerInformationComponent;
  let fixture: ComponentFixture<ConsumerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
