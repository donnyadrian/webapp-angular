import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario-mant',
  templateUrl: './usuario-mant.component.html',
  styleUrls: ['./usuario-mant.component.scss']
})
export class UsuarioMantComponent implements OnInit, OnDestroy {

  submitted: boolean = false;
  @Input() usuario: Usuario | undefined;
  @Output() closeDialogEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  public formUser: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.formUser = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      login: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      dominio: [false],
      cambio: [false],
      estado: [false],
    });
  }

  ngOnInit(): void {
    if(this.usuario != undefined){
      console.log("ngOnInit 2")
      this.formUser.setValue({
        nombres: this.usuario.nombre,
        login: this.usuario.login,
        email: this.usuario.email,
        password: null,
        dominio: false,
        cambio: false,
        estado: this.usuario.estado.descripcion == 'ACTIVO',
      });
    }
  }

  ngOnDestroy(){  }

  hideDialog() {
    this.submitted = false;
    this.closeDialogEvent.emit(undefined);
  }

  saveProduct() {
    this.submitted = true;
    if (this.formUser.status == "VALID") {
      this.closeDialogEvent.emit(this.usuario);
    }
  }
}
