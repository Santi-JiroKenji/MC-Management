import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSelectDialogComponent } from './package-select-dialog.component';

describe('PackageSelectDialogComponent', () => {
  let component: PackageSelectDialogComponent;
  let fixture: ComponentFixture<PackageSelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageSelectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
