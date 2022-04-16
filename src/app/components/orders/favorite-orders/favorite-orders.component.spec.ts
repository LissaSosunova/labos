import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteOrdersComponent } from './favorite-orders.component';

describe('FavoriteOrdersComponent', () => {
  let component: FavoriteOrdersComponent;
  let fixture: ComponentFixture<FavoriteOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
