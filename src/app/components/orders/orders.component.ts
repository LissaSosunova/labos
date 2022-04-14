import { Component, OnInit } from '@angular/core';
import { LoadOrders } from 'src/app/store/actions/orders.actions';
import { Store, select } from '@ngrx/store';
import { getSpinnerState, getOrders } from 'src/app/store/reducers';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [SearchPipe]
})
export class OrdersComponent implements OnInit {
  orders = {};
  orderSearch: string = '';
  // selector = selectOrders;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadOrders());
    this.orders = this.store.pipe(select(getSpinnerState));
    console.log(this.orders)
  }

}
