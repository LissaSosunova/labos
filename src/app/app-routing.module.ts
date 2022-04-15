import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/components/main/main.component';
import { OrdersComponent } from 'src/app/components/orders/orders.component';
import { PatientsComponent } from 'src/app/components/patients/patients.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'Labos test',
      content: 'Welcome page'
    },
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: {
      title: 'Labos test',
      content: 'Welcome page'
    }
  },
  {
    path: 'patients',
    component: PatientsComponent,
    data: {
      title: 'Labos test',
      content: 'Patients'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabled'
  }),
  RouterModule.forChild(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
