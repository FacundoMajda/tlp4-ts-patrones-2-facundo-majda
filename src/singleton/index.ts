import { ConexionDB } from "./clases/ConexionDB";
import { IConexionDB } from "./interfaces/IConexionDB";

const runSingleton = async () => {
  console.log("====================SINGLETON: CONEXIONDB ====================");

  const db1: IConexionDB = ConexionDB.getInstance(
    "inventario-db",
    3306,
    "usuario1"
  );
  db1.conectar();

  const db2: IConexionDB = ConexionDB.getInstance("otra-db", 5432, "usuario2");
  console.log("¿Es la misma instancia?", db1 === db2);

  db2.desconectar();

  console.log("====================\n");
};

export { runSingleton };
