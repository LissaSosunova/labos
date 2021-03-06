import { Component, OnInit } from '@angular/core';
import { AddPatientToFavorite } from 'src/app/store/actions/patients.actions';
import { Store, select } from '@ngrx/store';
import { getPatients } from 'src/app/store/reducers';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: [SearchPipe]
})
export class PatientsComponent implements OnInit {
  patients = {};
  patientSearch = '';
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
    this.store.pipe(select(getPatients)).subscribe((state) => {
      this.patients = state.data;
    });
  }
  setFavorite(id: any): void {
    this.store.dispatch(new AddPatientToFavorite({id}));
  }
  switchView(): void {
    this.router.navigate(['patients', 'favorites']);
  }
}
