import { Component, Input, OnInit } from '@angular/core';
import { AplicacionResponse } from 'src/app/models/aplicacion-response.model';

@Component({
  selector: 'app-aplicacion-detalle',
  templateUrl: './aplicacion-detalle.component.html',
  styleUrls: ['./aplicacion-detalle.component.scss']
})
export class AplicacionDetalleComponent implements OnInit {

  @Input() aplicacion: AplicacionResponse;
  
  constructor() {
    this.aplicacion = {
      id: 0,
      nombre: "",
      descripcion: "",
      esLanzador: false,
      esAppLanzamiento: false,
      nombreHost: "",
      dominio: "",
      url: "",
      ipAddress: "",
      key: "",
      code: "",
      browserDefault: "",
      versionBrowserDefault: "",
      version: "",
      imagen: "",
      identificadorMovil: "",
      esAppInterno: false,
      tipoAplicacion: {
        id: 0,
        nombre: ""
      },
      estado: {
        id: 0,
        descripcion: ""
      },
      visibleEnD4: false,
      esMesaServicio: false,
    }
   }

  ngOnInit(): void {
  }

}
