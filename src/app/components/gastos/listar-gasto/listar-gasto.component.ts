import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {
 subscription: Subscription
 presupuesto:number;
 restante: number;
 listGasto: any[]=[];
 cargando: boolean = false; // Variable para el estado de carga
  constructor(private _presupuestoService:PresupuestoService) {
    this.presupuesto = 0;
    this.restante = 0;
    this.subscription = this._presupuestoService.getGastos().subscribe(data =>{
    this.restante = this.restante - data.cantidad;
      this.listGasto.push(data);
    })
   }

  ngOnInit(): void {
    this.presupuesto =this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  aplicarColorRestante(){
    if (this.presupuesto / 4 > this.restante){
      return 'alert alert-danger';
    }else if(this.presupuesto /2 > this.restante){
      return 'alert alert-warning';
    }else
      return 'alert alert-secondary'
  }
  limpiarListado() {
    this.cargando = true; // Indica que la carga está en progreso
    // Simula un tiempo de espera (puedes reemplazar esto con tu lógica real)
    setTimeout(() => {
      this.listGasto = []; // Limpia la lista de gastos
      this.cargando = false; // Indica que la carga ha finalizado
    }, 1000); // 1000 milisegundos (1 segundo) como ejemplo, ajusta según tus necesidades
  }
}
