import { Component, OnInit } from '@angular/core';
import { AddOrderToFavorite } from 'src/app/store/actions/orders.actions';
import { Store, select } from '@ngrx/store';
import { getOrders } from 'src/app/store/reducers';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-orders',
  templateUrl: './favorite-orders.component.html',
  styleUrls: ['./favorite-orders.component.scss'],
  providers: [SearchPipe]
})
export class FavoriteOrdersComponent implements OnInit {
  orders = {};
  orderSearch = '';
  constructor(
    private store: Store<any>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(getOrders)).subscribe((state) => {
      this.orders = state.favorite;
    }
    );
  }
  setFavorite(id: any): void {
    this.store.dispatch(new AddOrderToFavorite({id}));
  }
  switchView(): void {
    this.router.navigate(['orders']);
  }
}
