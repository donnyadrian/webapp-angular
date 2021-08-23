import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario-mant',
  templateUrl: './usuario-mant.component.html',
  styleUrls: ['./usuario-mant.component.scss']
})
export class UsuarioMantComponent implements OnInit, OnDestroy {

  @Input() usuarioDialog: boolean = false;
  submitted: boolean = false;
  @Input() usuario: Usuario;
  
  public formUser: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.usuario = {
      id: 0,
      idPersona: 0,
      nombre: "",
      login: "",
      email: "",
      esAd: 0,
      fechaUltimaSesion: "",
      estado: {
        id:0,
        descripcion:""
      },
      perfil: {
        id: 0,
        nombre: ""
      }
    };
    this.formUser = this.fb.group({
      nombres: [null, [Validators.required]],
      login: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      password: [null],
      dominio: [null],
      cambio: [null],
      estado: [null],
    });
   }

  ngOnInit(): void {
    this.formUser.setValue({
      nombres: [this.usuario.nombre],
      login: [this.usuario.login],
      email: [this.usuario.email],
      password: [null],
      dominio: [null],
      cambio: [false],
      estado: [this.usuario.estado.descripcion == 'ACTIVO'],
    });
    console.log("ngOnInit");
  }

  ngOnDestroy(){
    console.log("fin");
  }

  initForm() {
    this.formUser = this.fb.group({
      nombres: [null, [Validators.required]],
      login: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      password: [null],
      dominio: [false],
      cambio: [false],
      estado: [false],
    });
  }

  openNew() {
    console.log("nuevo");
    this.usuario = {
      id: 0,
      idPersona: 0,
      nombre: "",
      login: "",
      email: "",
      esAd: 0,
      fechaUltimaSesion: "",
      estado: {
        id:0,
        descripcion:""
      },
      perfil: {
        id: 0,
        nombre: ""
      }
    };
    this.submitted = false;
    this.usuarioDialog = true;
    this.initForm();
    
  }

  hideDialog() {
    this.usuarioDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
  }


}
