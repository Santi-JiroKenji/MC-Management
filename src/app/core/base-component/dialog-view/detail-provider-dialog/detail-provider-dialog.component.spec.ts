import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProviderDialogComponent } from './detail-provider-dialog.component';

describe('DetailProviderDialogComponent', () => {
  let component: DetailProviderDialogComponent;
  let fixture: ComponentFixture<DetailProviderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProviderDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProviderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
