import { Usuario } from './usuario.model';
import { Paginacion } from './paginacion.model';

export interface UsuariosResponse {
    usuarios: Usuario[];
    paginacion: Paginacion;
}