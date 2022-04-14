import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect} from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoadOrdersSuccess, LoadOrdersFailure, OrdersActionTypes } from 'src/app/store/actions/orders.actions';



@Injectable()
export class OrdersEffects {
  loadOrders$ = createEffect(() =>
  this.actions$.pipe<any, any>(
    ofType(OrdersActionTypes.LoadOrders),
      mergeMap(
        () => this.api.getInfo('79fb05cb')
        .pipe(
          map(resp => {
            return new LoadOrdersSuccess(resp);
          }),
          catchError(error => of(new LoadOrdersFailure(error)))
        )
      )
    )
  );
  constructor(private actions$: Actions, private api: ApiService) {}
}
