import { PatientsActions, PatientsActionTypes } from 'src/app/store/actions/patients.actions';


export const patientsFeatureKey = 'patients';
export interface Patient {
  address: {
    fax: String;
    zip: String;
    email: String;
    phone1: String;
    phone2: String;
    street1: String;
    street2: String;
    street3: String;}
  age: String;
  birthDate: {
    dateTime: String;
    formattedDate: String;
  }
  birthYear: Number;
  code: Number;
  defaultId: String;
  defaultIdType: {
    code: Number;
    name: String;}
  firstName: String;
  fullName: String;
  ids: Array<Ids>;
  inactive: false
  lastName: String;
  middleName: String;
}

export interface Ids {
  code: Number;
  name: String;
  value: String;
}
export interface NewPatient extends Patient {
  favorite: Boolean;
}
export interface StatePatients {
  data: any;
  isLoaded: Boolean;
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
        newstateData.push({...item, favorite: false})
      })
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
              newstateData.push({...item, favorite: false})
            } else {
              newstateData.push({...item, favorite: true})
            }
          } else {
            newstateData.push({...item})
          }
        })
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
};

