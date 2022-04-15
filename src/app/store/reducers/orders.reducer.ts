import { OrdersActions, OrdersActionTypes } from 'src/app/store/actions/orders.actions';


export const ordersFeatureKey = 'orders';

export interface Order {
  creationDate: {
    dateTime: string;
    formattedDate: string;
    formattedTime: string;
  };
  creator: {
    code: number;
    name: string;
    username: string;
  };
  facility: {
    address: object;
    code: number;
    name: string;
    restrictedDistributions: boolean;
  };
  flags: string;
  hasComments: boolean;
  identifier: string;
  insurance: {
    paymentMethods: Array<any>;
    isRejected: boolean;
    onHold: boolean;
    orderName: string;
    orderNum: number;
  };
  isRejected: boolean;
  onHold: boolean;
  orderName: string;
  orderNum: number;
  patient: {
    address: object;
    age: string;
    birthDate: object;
    birthYear: number;
    code: number;
    defaultFormattedId: string;
    defaultId: string;
    defaultIdType: object;
    firstName: string;
    fullName: string;
    lastName: string;
    middleName: string;
    sex: object;
  };
  physician: {
    code: 107354
    firstName: string;
    lastName: string;
    name: string;
  };
  requests: Array<any>;
  samples: Array<any>;
  stat: boolean;
  status: {
    identifier: string;
    name: string;
  };
  testTypes: Array<any>;
}

export interface NewOrder extends Order {
  favorite: boolean;
}
export interface StateOrders {
  data: Array<NewOrder>;
  isLoaded: boolean;
}

export const initialState: StateOrders = {
  data: [],
  isLoaded: false
};

export function ordersReducer(state: StateOrders = initialState, action: OrdersActions): StateOrders {
  switch (action.type) {
    case OrdersActionTypes.LoadOrdersSuccess: {
      const updateState = {...state};
      updateState.data = action.payload.order;
      const newstateData: Array<NewOrder> = [];
      updateState.data.forEach((item) => {
        newstateData.push({...item, favorite: false});
      });
      updateState.isLoaded = true;
      updateState.data = newstateData;
      return updateState;
    }
    case OrdersActionTypes.AddOrderToFavorite: {
      const updateState = {...state};
      const id = action.payload.id;
      const newstateData: Array<NewOrder> = [];
      updateState.data.forEach((item) => {
        if (item.orderNum === id) {
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

    case OrdersActionTypes.LoadOrdersFailure:
      return {
        ...state,
        data: [], isLoaded: false
      };
    default:
      return state;
  }
}
