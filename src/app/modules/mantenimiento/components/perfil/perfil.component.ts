import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilService } from '../../../../services/perfil.service';
import { PerfilResponse } from '../../../../models/perfil-response.model';
import { AplicacionService } from 'src/app/services/aplicacion.service';
import { AplicacionResponse } from 'src/app/models/aplicacion-response.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfil: PerfilResponse;
  aplicacion: AplicacionResponse;

  constructor(
    private activateroute: ActivatedRoute, 
    private perfilService: PerfilService, 
    private aplicacionService: AplicacionService,
  ) { 
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
    const codigo = this.activateroute.snapshot.paramMap.get('id');
    console.log(codigo);
    this.getPerfil(Number(codigo));
  }

  getPerfil(id: number) {
    this.perfilService.getPerfil(id).subscribe(resp => {
      this.perfil = resp;
      if(this.perfil.aplicacionesAsignadas.length > 0){
        this.aplicacionService.getAplicacion(this.perfil.aplicacionesAsignadas[0]).subscribe(resp => {
          this.aplicacion = resp;
          console.log(this.aplicacion);
          //this.listaUsuarios = resp.data;
          // console.log(this.listaUsuarios)
        });
      }
    });
  }

}
