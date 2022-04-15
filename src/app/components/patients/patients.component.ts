import { Component, OnInit } from '@angular/core';
import { LoadPatientss } from 'src/app/store/actions/patients.actions';
import { Store, select } from '@ngrx/store';
import { getPatients } from 'src/app/store/reducers';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: [SearchPipe]
})
export class PatientsComponent implements OnInit {

  patients = {};
  patientSearch: string = '';
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadPatientss());
    this.store.pipe(select(getPatients)).subscribe((state) => {
      console.log(state)
      this.patients = state.data;
    }
    );
  }
}
