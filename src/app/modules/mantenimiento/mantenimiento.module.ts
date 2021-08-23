import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { UsuarioMantComponent } from './components/usuario-mant/usuario-mant.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilDetalleComponent } from './components/perfil-detalle/perfil-detalle.component';
import { AplicacionDetalleComponent } from './components/aplicacion-detalle/aplicacion-detalle.component';
import { CardComponent } from './components/card/card.component';

import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsuarioMantComponent,
    UsuarioListaComponent,
    UsuarioComponent,
    PerfilComponent,
    PerfilDetalleComponent,
    AplicacionDetalleComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    ConfirmDialogModule,
    CheckboxModule,
    DialogModule,
    ToolbarModule,
    TableModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
  ]
})
export class MantenimientoModule { }
