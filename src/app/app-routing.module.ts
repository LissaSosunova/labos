import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/components/main/main.component';
import { OrdersComponent } from 'src/app/components/orders/orders.component';
import { PatientsComponent } from 'src/app/components/patients/patients.component';
import { FavoriteOrdersComponent } from 'src/app/components/orders/favorite-orders/favorite-orders.component';
import { FavoritePatientsComponent } from 'src/app/components/patients/favorite-patients/favorite-patients.component';

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
    },
    children: [
      {
        path: 'favorites',
        component: FavoriteOrdersComponent,
        data: {
          title: 'Labos test',
          content: 'Orders favorites'
        }
      }
    ]
  },
  {
    path: 'patients',
    component: PatientsComponent,
    data: {
      title: 'Labos test',
      content: 'Patients'
    },
    children: [
      {
        path: 'favorites',
        component: FavoritePatientsComponent,
        data: {
          title: 'Labos test',
          content: 'Patients favorites'
        }
      }
    ]
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
