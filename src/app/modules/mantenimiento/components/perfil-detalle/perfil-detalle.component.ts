import { Component, Input, OnInit } from '@angular/core';
import { PerfilResponse } from 'src/app/models/perfil-response.model';

@Component({
  selector: 'app-perfil-detalle',
  templateUrl: './perfil-detalle.component.html',
  styleUrls: ['./perfil-detalle.component.scss']
})
export class PerfilDetalleComponent implements OnInit {

  @Input() perfil: PerfilResponse;
  
  constructor() { 
    this.perfil = {
      id: 0,
      nombre: "",
      descripcion: "",
      empresa: {
        id: 0,
        nombre: ""
      },
      ambitosAsignados: [],
      aplicacionesAsignadas: [],
      estado: {
        id: 0,
        descripcion: ""
      },
      listaPerfilAplicacionRol: []
    };
  }

  ngOnInit(): void {
  }

}
