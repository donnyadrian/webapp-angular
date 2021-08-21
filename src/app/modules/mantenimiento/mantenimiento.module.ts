import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { UsuarioMantComponent } from './components/usuario-mant/usuario-mant.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilDetalleComponent } from './components/perfil-detalle/perfil-detalle.component';
import { AplicacionDetalleComponent } from './components/aplicacion-detalle/aplicacion-detalle.component';
import { CardComponent } from './components/card/card.component';


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
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
