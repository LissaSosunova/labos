import { Component, OnInit } from '@angular/core';
import { AddOrderToFavorite } from 'src/app/store/actions/orders.actions';
import { Store, select } from '@ngrx/store';
import { getOrders } from 'src/app/store/reducers';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [SearchPipe]
})
export class OrdersComponent implements OnInit {
  orders = {};
  orderSearch = '';
  currentRout = '';
  constructor(
    private store: Store<any>,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.currentRout = event.urlAfterRedirects;
       }
    });
  }

  ngOnInit(): void {
    this.store.pipe(select(getOrders)).subscribe((state) => {
      this.orders = state.data;
    }
    );
  }

  setFavorite(id: any): void {
    this.store.dispatch(new AddOrderToFavorite({id}));
  }
  switchView(): void {
    this.router.navigate(['orders', 'favorites']);
  }
}
