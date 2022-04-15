import { OrdersActions, OrdersActionTypes } from 'src/app/store/actions/orders.actions';


export const ordersFeatureKey = 'orders';

export interface Order {
  creationDate: Object;
  creator: Object;
  facility: Object;
  flags: String;
  hasComments: Boolean;
  identifier: String;
  insurance: Object;
  isRejected: Boolean;
  onHold: Boolean;
  orderName: String;
  orderNum: Number;
  patient: Object;
  physician: Object;
  requests: Array<any>;
  samples: Array<any>;
  stat: Boolean
  status: Object;
  testTypes: Array<any>;
  favorite?: Boolean;
}
export interface StateOrders {
  data: Array<Order>;
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
