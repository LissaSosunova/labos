import { Component, OnInit } from '@angular/core';
import { LoadOrders } from 'src/app/store/actions/orders.actions';
import { Store} from '@ngrx/store';
import { LoadPatientss } from 'src/app/store/actions/patients.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadOrders());
    this.store.dispatch(new LoadPatientss());
  }
  public activate(event: any): void {
    if (event) {
      window.scroll(0, 0);
    }
  }
}
