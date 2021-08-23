import { Estado } from "./estado.model";

export interface Usuario {
    id: number;
    idPersona: number;
    nombre: string;
    login: string;
    email: string;
    esAd: number;
    fechaUltimaSesion: string;
    estado: Estado;
    perfil: UsuarioPerfil;
}

interface UsuarioPerfil {
    id: number;
    nombre: string;
}

export interface UsuarioRequest {
    idPersona: number;
    nombre: string;
    login: string;
    email: string;
    esAd: number;
    clave: string;
    estado: Estado;
    cambioContrasenia: boolean;
}
