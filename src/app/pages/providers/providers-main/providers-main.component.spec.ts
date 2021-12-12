import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersMainComponent } from './providers-main.component';

describe('ProvidersMainComponent', () => {
  let component: ProvidersMainComponent;
  let fixture: ComponentFixture<ProvidersMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
