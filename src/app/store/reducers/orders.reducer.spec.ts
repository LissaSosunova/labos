import { ordersReducer, initialState } from './orders.reducer';

describe('Orders Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = ordersReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
