import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  constructor(public _presupuestoService:PresupuestoService) { }

  ngOnInit(): void {
    console.log(this._presupuestoService.presupuesto);
  }

}
