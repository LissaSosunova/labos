import { StatePatients,  patientsReducer } from 'src/app/store/reducers/patients.reducer';
import { StateOrders, ordersReducer } from 'src/app/store/reducers/orders.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const rootReducer = {};

export interface AppState {
    patients: StatePatients;
    orders: StateOrders;
}


export const reducers: ActionReducerMap<AppState, any> = {
    patients: patientsReducer,
    orders: ordersReducer
};

export const selectOrders = (state: AppState) => state.orders;
export const selectPatients = (state: AppState) => state.patients;

export const getOrders = createSelector(
    selectOrders,
    (state: StateOrders) => state
    );
export const getPatients = createSelector(
    selectPatients,
    (state: StatePatients) => state
  );
