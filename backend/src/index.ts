import "reflect-metadata";
import app from "./App";
import { AppSource } from "./db";

async function main() {
  try {
    // Inicializamos el orm
    await AppSource.initialize();

    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`Server running in http://localhost:${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
