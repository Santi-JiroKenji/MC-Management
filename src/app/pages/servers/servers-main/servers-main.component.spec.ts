import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersMainComponent } from './servers-main.component';

describe('ServersMainComponent', () => {
  let component: ServersMainComponent;
  let fixture: ComponentFixture<ServersMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
