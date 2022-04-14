import * as OrdersActions from './orders.actions';

describe('Orders', () => {
  it('should create an instance', () => {
    expect(new OrdersActions.LoadOrders()).toBeTruthy();
  });
});
