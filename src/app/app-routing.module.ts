import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionesComponent } from './shared/cotizaciones/cotizaciones.component';
import { ServicePedidosComponent } from './shared/service-pedidos/service-pedidos.component';

const routes: Routes = [
	{path: "", component: CotizacionesComponent},
	{path: "quotes", component: ServicePedidosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
