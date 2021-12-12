import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConsumerDialogComponent } from './detail-consumer-dialog.component';

describe('DetailConsumerDialogComponent', () => {
  let component: DetailConsumerDialogComponent;
  let fixture: ComponentFixture<DetailConsumerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailConsumerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailConsumerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
