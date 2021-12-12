import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSelectDialogComponent } from './server-select-dialog.component';

describe('ServerSelectDialogComponent', () => {
  let component: ServerSelectDialogComponent;
  let fixture: ComponentFixture<ServerSelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerSelectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
