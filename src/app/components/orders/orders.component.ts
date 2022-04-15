import { Component, OnInit } from '@angular/core';
import { LoadOrders, AddOrderToFavorite } from 'src/app/store/actions/orders.actions';
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
  orderSearch = '';
  showFav = false;
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadOrders());
    this.store.pipe(select(getOrders)).subscribe((state) => {
      this.orders = state.data;
    }
    );
  }

  setFavorite(id: any): void {
    this.store.dispatch(new AddOrderToFavorite({id}));
  }
  switchView(): void {
    this.showFav = !this.showFav;
  }
}
