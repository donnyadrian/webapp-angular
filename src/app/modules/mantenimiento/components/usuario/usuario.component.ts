import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  providers: [UsuarioService, MessageService,ConfirmationService]
})
export class UsuarioComponent implements OnInit {

  public formUser: FormGroup;
  usuarioDialog: boolean = false;
  usuarios: Usuario[] = [];
  usuario: Usuario;
  submitted: boolean = false;

  constructor(private usuarioService: UsuarioService, private messageService: MessageService, private confirmationService: ConfirmationService,
    private fb: FormBuilder) { 
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
    this.getUsers();
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

    /*this.formUser.controls.state.valueChanges.subscribe((val) => {
      console.log(val);
    });

    this.formUser.controls.address.valueChanges.subscribe((val) => {
      console.log(val);
    });*/
  }

  getUsers() {
    this.usuarioService.getAllUsers().subscribe(resp => {
      console.log(resp);
      this.usuarios = resp.usuarios;
       //console.log(this.listaUsuarios)
    });
  }

  openNew() {
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

  editUsuario(usuario: Usuario) {
    this.usuario = {...usuario};
    console.log(this.usuario)
    this.usuarioDialog = true;
    this.formUser.setValue({
      nombres: [this.usuario.nombre],
      login: [this.usuario.login],
      email: [this.usuario.email],
      password: [null],
      dominio: [null],
      cambio: [false],
      estado: [this.usuario.estado.descripcion == 'ACTIVO'],
    });
    //this.formUser.controls. .setValue(this.usuario);
  }

  hideDialog() {
    this.usuarioDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
  }
}
