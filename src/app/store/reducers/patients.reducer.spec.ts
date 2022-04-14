import { patientsReducer, initialState } from './patients.reducer';

describe('Patients Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = patientsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
