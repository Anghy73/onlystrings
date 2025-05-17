import app from "./app"
import { AppDataSource } from "./db/conexion"

async function main() {
  try {
    console.log(process.env.PASSWORD_DB);
    
    await AppDataSource.initialize()
    console.log("DB onlystrings conectada");
    app.listen(5600, () => console.log("servidor iniciado en el puerto 5600"))
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

main()