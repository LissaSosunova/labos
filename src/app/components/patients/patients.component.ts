import { Component, OnInit } from '@angular/core';
import { LoadPatientss } from 'src/app/store/actions/patients.actions';
import { Store } from '@ngrx/store';
import { selectPatients } from 'src/app/store/reducers';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: [SearchPipe]
})
export class PatientsComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadPatientss());
  }

}
