import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersDataComponent } from './servers-data.component';

describe('ServersDataComponent', () => {
  let component: ServersDataComponent;
  let fixture: ComponentFixture<ServersDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
