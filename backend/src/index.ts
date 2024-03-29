import "reflect-metadata";
import app from "./App";
import { AppSource } from "./db";

async function main() {
  try {
    // Inicializamos el orm
    await AppSource.initialize();

    // Start the server
    app.listen(3000, () => {
      console.log("Server running in http://localhost:3000");
    });
  } catch (err) {
    console.log(err);
  }
}

main();
