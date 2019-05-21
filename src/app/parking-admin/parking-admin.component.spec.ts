import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingAdminComponent } from './parking-admin.component';

describe('ParkingAdminComponent', () => {
  let component: ParkingAdminComponent;
  let fixture: ComponentFixture<ParkingAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
