import { PatientsActions, PatientsActionTypes } from 'src/app/store/actions/patients.actions';


export const patientsFeatureKey = 'patients';

export interface StatePatients {
  data: any;
  isLoaded: Boolean;
  favorites: Array<any>;
}

export const initialState: StatePatients = {
  data: [],
  isLoaded: false,
  favorites: []
};


export function patientsReducer(state: StatePatients = initialState, action: PatientsActions): StatePatients {
  switch (action.type) {
    case (PatientsActionTypes.LoadPatientssSuccess):
      const updateState = {...state};
      updateState.data = action.payload.patient;
      updateState.isLoaded = true;
      return updateState;
    case PatientsActionTypes.LoadPatientssFailure:
      return {
        ...state,
        data: [], favorites: [], isLoaded: false
      };
    default:
      return state;
  }
};

