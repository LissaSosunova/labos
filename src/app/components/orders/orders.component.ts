import { Component, OnInit } from '@angular/core';
import { LoadOrders } from 'src/app/store/actions/orders.actions';
import { Store, select } from '@ngrx/store';
import { getOrders } from 'src/app/store/reducers';
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
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadOrders());
    this.store.pipe(select(getOrders)).subscribe((state) => {
      console.log(state)
      this.orders = state.data;
    }
    );
  }

}
