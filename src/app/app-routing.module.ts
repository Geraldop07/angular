import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTransaccionComponent } from './componentes/create-transaccion/create-transaccion.component';
import { FinanzasComponent } from './finanzas/finanzas.component';
import { ListadoComponent } from './listado/listado.component';
import { TarjetaPresentacionComponent } from './tarjeta-presentacion/tarjeta-presentacion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'presentacion',
    pathMatch: 'full'
  },
  {
    path: 'presentacion',
    component: TarjetaPresentacionComponent
  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'finanzas',
    component: FinanzasComponent
  },
  {
    path: 'create',
    component: CreateTransaccionComponent
  },
  {
    path: '**',
    redirectTo: 'presentacion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
