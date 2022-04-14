import { OrdersActions, OrdersActionTypes } from 'src/app/store/actions/orders.actions';


export const ordersFeatureKey = 'orders';

export interface StateOrders {
  data: any;
  isLoaded: boolean;
  favorites: Array<any>;
}

export const initialState: StateOrders = {
  data: [],
  isLoaded: false,
  favorites: []
};

export function ordersReducer(state: StateOrders = initialState, action: OrdersActions): StateOrders {
  switch (action.type) {
    case OrdersActionTypes.LoadOrdersSuccess: {
      const updateState = {...state};
        updateState.data = action.payload.order;
        updateState.isLoaded = true;
        return updateState;
    }
    case OrdersActionTypes.LoadOrdersFailure:
      return {
        ...state,
        data: [], favorites: [], isLoaded: false
      };
    default:
      return state;
  }
}
