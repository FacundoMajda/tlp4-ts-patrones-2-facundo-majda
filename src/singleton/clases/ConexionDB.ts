import { IConexionDB } from "../interfaces/IConexionDB";

export class ConexionDB implements IConexionDB {
  private static instance: ConexionDB;
  private host: string;
  private puerto: number;
  private usuario: string;
  private conectada: boolean = false;

  private constructor(host: string, puerto: number, usuario: string) {
    this.host = host;
    this.puerto = puerto;
    this.usuario = usuario;
  }

  public static getInstance(
    host: string = "localhost",
    puerto: number = 5432,
    usuario: string = "admin"
  ): ConexionDB {
    if (!ConexionDB.instance) {
      ConexionDB.instance = new ConexionDB(host, puerto, usuario);
    }
    return ConexionDB.instance;
  }

  conectar(): void {
    if (!this.conectada) {
      console.log(
        `Conectando a la base de datos en ${this.host}:${this.puerto} como ${this.usuario}`
      );
      this.conectada = true;
    } else {
      console.log("La conexión ya está activa");
    }
  }

  desconectar(): void {
    if (this.conectada) {
      console.log(
        `Desconectando de la base de datos en ${this.host}:${this.puerto}`
      );
      this.conectada = false;
    } else {
      console.log("La conexión ya está inactiva");
    }
  }

  getEstado(): boolean {
    return this.conectada;
  }
}
