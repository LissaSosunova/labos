import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PatientsEffects } from './patients.effects';

describe('PatientsEffects', () => {
  let actions$: Observable<any>;
  let effects: PatientsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PatientsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PatientsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
