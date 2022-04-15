import { PatientsActions, PatientsActionTypes } from 'src/app/store/actions/patients.actions';


export const patientsFeatureKey = 'patients';
export interface Patient {
  address: {
    fax: string;
    zip: string;
    email: string;
    phone1: string;
    phone2: string;
    street1: string;
    street2: string;
    street3: string; };
  age: string;
  birthDate: {
    dateTime: string;
    formattedDate: string;
  };
  birthYear: number;
  code: number;
  defaultId: string;
  defaultIdType: {
    code: number;
    name: string; };
  firstName: string;
  fullName: string;
  ids: Array<Ids>;
  inactive: false;
  lastName: string;
  middleName: string;
}

export interface Ids {
  code: number;
  name: string;
  value: string;
}
export interface NewPatient extends Patient {
  favorite: boolean;
}
export interface StatePatients {
  data: any;
  isLoaded: boolean;
}

export const initialState: StatePatients = {
  data: [],
  isLoaded: false
};


export function patientsReducer(state: StatePatients = initialState, action: PatientsActions): StatePatients {
  switch (action.type) {
    case (PatientsActionTypes.LoadPatientssSuccess): {
      const updateState = {...state};
      updateState.data = action.payload.patient;
      const newstateData: Array<NewPatient> = [];
      updateState.data.forEach((item: Patient) => {
        newstateData.push({...item, favorite: false});
      });
      updateState.isLoaded = true;
      updateState.data = newstateData;
      return updateState;
    }
      case PatientsActionTypes.AddPatientToFavorite: {
        const updateState = {...state};
        const id = action.payload.id;
        const newstateData: Array<NewPatient> = [];
        updateState.data.forEach((item: NewPatient) => {
          if (item.defaultId === id) {
            if (item.favorite === true) {
              newstateData.push({...item, favorite: false});
            } else {
              newstateData.push({...item, favorite: true});
            }
          } else {
            newstateData.push({...item});
          }
        });
        updateState.data = newstateData;
        return updateState;
      }

    case PatientsActionTypes.LoadPatientssFailure:
      return {
        ...state,
        data: [], isLoaded: false
      };
    default:
      return state;
  }
}

