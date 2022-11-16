//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { ListarGastoComponent } from './components/gastos/listar-gasto/listar-gasto.component';

@NgModule({
  declarations: [
    AppComponent,

    GastosComponent,
    IngresarGastoComponent,
    IngresarPresupuestoComponent,
    ListarGastoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
