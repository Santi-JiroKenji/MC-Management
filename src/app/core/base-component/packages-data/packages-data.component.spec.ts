import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesDataComponent } from './packages-data.component';

describe('PackagesDataComponent', () => {
  let component: PackagesDataComponent;
  let fixture: ComponentFixture<PackagesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
