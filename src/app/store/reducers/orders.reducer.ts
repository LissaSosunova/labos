import { OrdersActions, OrdersActionTypes } from 'src/app/store/actions/orders.actions';


export const ordersFeatureKey = 'orders';

export interface Order {
  creationDate: {
    dateTime: String;
    formattedDate: String;
    formattedTime: String;
  };
  creator: {
    code: Number;
    name: String;
    username: String;
  };
  facility: {
    address: Object;
    code: Number;
    name: String;
    restrictedDistributions: Boolean;
  };
  flags: String;
  hasComments: Boolean;
  identifier: String;
  insurance: {
    paymentMethods: Array<any>;
    isRejected: Boolean;
    onHold: Boolean;
    orderName: String;
    orderNum: Number;
  };
  isRejected: Boolean;
  onHold: Boolean;
  orderName: String;
  orderNum: Number;
  patient: {
    address: Object;
    age: String;
    birthDate: Object;
    birthYear: Number;
    code: Number;
    defaultFormattedId: String;
    defaultId: String;
    defaultIdType: Object;
    firstName: String;
    fullName: String;
    lastName: String;
    middleName: String;
    sex: Object;
  };
  physician: {
    code: 107354
    firstName: String;
    lastName: String;
    name: String;
  };
  requests: Array<any>;
  samples: Array<any>;
  stat: Boolean
  status: {
    identifier: String;
    name: String;
  };
  testTypes: Array<any>;
}

export interface NewOrder extends Order {
  favorite: Boolean;
}
export interface StateOrders {
  data: Array<NewOrder>;
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
      const newstateData: Array<NewOrder> = [];
      updateState.data.forEach((item) => {
        newstateData.push({...item, favorite: false})
      })
      updateState.isLoaded = true;
      updateState.data = newstateData;
      return updateState;
    }
    case OrdersActionTypes.AddOrderToFavorite:
      const updateState = {...state};
      const id = action.payload.id;
      const newstateData: Array<NewOrder> = [];
      updateState.data.forEach((item) => {
        if (item.orderNum === id) {
          newstateData.push({...item, favorite: true})
        } else {
          newstateData.push({...item})
        }
      })
      updateState.data = newstateData;
      return updateState;
    case OrdersActionTypes.LoadOrdersFailure:
      return {
        ...state,
        data: [], favorites: [], isLoaded: false
      };
    default:
      return state;
  }
}
