import { Action } from '@ngrx/store';

export enum OrdersActionTypes {
  LoadOrders = '[Orders] Load Orders',
  LoadOrdersSuccess = '[Orders] Load Orders Success',
  LoadOrdersFailure = '[Orders] Load Orders Failure',
  AddOrderToFavorite = '[Orders] Add Order To Favorite'
}

export class LoadOrders implements Action {
  readonly type = OrdersActionTypes.LoadOrders;
}

export class LoadOrdersSuccess implements Action {
  readonly type = OrdersActionTypes.LoadOrdersSuccess;
  constructor(public payload: any) { }
}

export class LoadOrdersFailure implements Action {
  readonly type = OrdersActionTypes.LoadOrdersFailure;
  constructor(public payload: any) { }
}

export class AddOrderToFavorite implements Action {
  readonly type = OrdersActionTypes.AddOrderToFavorite;
  constructor(public payload: any) { }
}

export type OrdersActions = LoadOrders | LoadOrdersSuccess | LoadOrdersFailure | AddOrderToFavorite;

