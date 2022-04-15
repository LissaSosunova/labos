import { Component, OnInit } from '@angular/core';
import { LoadPatientss, AddPatientToFavorite } from 'src/app/store/actions/patients.actions';
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
  patientSearch = '';
  showFav = false;
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadPatientss());
    this.store.pipe(select(getPatients)).subscribe((state) => {
      this.patients = state.data;
      console.log(this.patients);
    }
    );
  }
  setFavorite(id: any): void {
    this.store.dispatch(new AddPatientToFavorite({id}));
  }
  switchView(): void {
    this.showFav = !this.showFav;
  }
}
