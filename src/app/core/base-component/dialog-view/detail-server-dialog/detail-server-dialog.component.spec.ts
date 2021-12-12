import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailServerDialogComponent } from './detail-server-dialog.component';

describe('DetailServerDialogComponent', () => {
  let component: DetailServerDialogComponent;
  let fixture: ComponentFixture<DetailServerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailServerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailServerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
