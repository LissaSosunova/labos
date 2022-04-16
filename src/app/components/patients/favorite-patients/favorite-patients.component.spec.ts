import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePatientsComponent } from './favorite-patients.component';

describe('FavoritePatientsComponent', () => {
  let component: FavoritePatientsComponent;
  let fixture: ComponentFixture<FavoritePatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
