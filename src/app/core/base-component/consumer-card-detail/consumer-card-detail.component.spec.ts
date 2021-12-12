import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerCardDetailComponent } from './consumer-card-detail.component';

describe('ConsumerCardDetailComponent', () => {
  let component: ConsumerCardDetailComponent;
  let fixture: ComponentFixture<ConsumerCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
