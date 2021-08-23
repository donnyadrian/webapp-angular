import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './modules/mantenimiento/components/usuario/usuario.component';
import { PerfilComponent } from './modules/mantenimiento/components/perfil/perfil.component';
import { AuditoriaErroresComponent } from './modules/auditoria/components/auditoria-errores/auditoria-errores.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuario', pathMatch: 'full' },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: 'auditoria', component: AuditoriaErroresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
