import * as PatientsActions from './patients.actions';

describe('Patients', () => {
  it('should create an instance', () => {
    expect(new PatientsActions.LoadPatientss()).toBeTruthy();
  });
});
