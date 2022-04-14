import { Action } from '@ngrx/store';

export enum PatientsActionTypes {
  LoadPatientss = '[Patients] Load Patientss',
  LoadPatientssSuccess = '[Patients] Load Patientss Success',
  LoadPatientssFailure = '[Patients] Load Patientss Failure',
}

export class LoadPatientss implements Action {
  readonly type = PatientsActionTypes.LoadPatientss;
}

export class LoadPatientssSuccess implements Action {
  readonly type = PatientsActionTypes.LoadPatientssSuccess;
  constructor(public payload: any) { }
}

export class LoadPatientssFailure implements Action {
  readonly type = PatientsActionTypes.LoadPatientssFailure;
  constructor(public payload: any) { }
}

export type PatientsActions = LoadPatientss | LoadPatientssSuccess | LoadPatientssFailure;

