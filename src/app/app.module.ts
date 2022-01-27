import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material 
import { MaterialModelModule } from './models/material-model/material-model.module';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { FormularioComponent } from './components/formulario/formulario.component';
// import { TableComponent } from './components/table/table.component';
// import { LoginComponent } from './shared/components/login/login.component';
import { CalendarRoutesComponent } from './shared/calendar-routes/calendar-routes.component';


@NgModule({
  declarations: [
    AppComponent,

    CalendarRoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModelModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
