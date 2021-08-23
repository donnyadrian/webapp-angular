import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent implements OnInit {

  @Input() usuarios: Usuario[] = [];
  @Output() editUsuarioEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  
  constructor() { }

  ngOnInit(): void {
  }

  editUsuario(usuario: Usuario) {
    this.editUsuarioEvent.emit(usuario);
  }

}
