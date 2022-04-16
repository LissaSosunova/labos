import { Component, OnInit } from '@angular/core';
import { AddPatientToFavorite } from 'src/app/store/actions/patients.actions';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { getPatients } from 'src/app/store/reducers';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';

@Component({
  selector: 'app-favorite-patients',
  templateUrl: './favorite-patients.component.html',
  styleUrls: ['./favorite-patients.component.scss'],
  providers: [SearchPipe]
})
export class FavoritePatientsComponent implements OnInit {
  patients = {};
  patientSearch = '';
  constructor(
    private store: Store<any>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(getPatients)).subscribe((state) => {
      this.patients = state.favorite;
    });
  }
  setFavorite(id: any): void {
    this.store.dispatch(new AddPatientToFavorite({id}));
  }
  switchView(): void {
    this.router.navigate(['patients']);
  }
}
