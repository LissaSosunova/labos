import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect} from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoadPatientssSuccess, LoadPatientssFailure, PatientsActionTypes } from 'src/app/store/actions/patients.actions';



@Injectable()
export class PatientsEffects {
  loadPatients$ = createEffect(() =>
  this.actions$.pipe<any, any>(
    ofType(PatientsActionTypes.LoadPatientss),
      mergeMap(
        () => this.api.getInfo('51597ef3')
        .pipe(
          map(resp => {
            return new LoadPatientssSuccess(resp);
          }),
          catchError(error => of(new LoadPatientssFailure(error)))
        )
      )
    )
  );
  constructor(private actions$: Actions, private api: ApiService) {}
}
