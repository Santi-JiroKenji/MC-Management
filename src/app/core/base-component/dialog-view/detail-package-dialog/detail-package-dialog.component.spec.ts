import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPackageDialogComponent } from './detail-package-dialog.component';

describe('DetailPackageDialogComponent', () => {
  let component: DetailPackageDialogComponent;
  let fixture: ComponentFixture<DetailPackageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPackageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPackageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
