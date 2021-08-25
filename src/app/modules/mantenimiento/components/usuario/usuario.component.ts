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

  usuarioDialog: boolean = false;
  usuarios: Usuario[] = [];
  usuario: Usuario |  undefined;

  constructor(private usuarioService: UsuarioService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usuarioService.getAllUsers().subscribe(resp => {
      console.log(resp);
      this.usuarios = resp.usuarios;
    });
  }

  openNew() {
    this.usuario = undefined;
    this.usuarioDialog = true;
    console.log(this.usuario)
  }

  editUsuario(usuario: Usuario) {
    this.usuario = {...usuario};
    this.usuarioDialog = true;
    console.log(this.usuario)
  }

  closeDialog(usuario : Usuario) {
    this.usuarioDialog = false;
    console.log(usuario)
    if(usuario != undefined){

    }
  }
}
