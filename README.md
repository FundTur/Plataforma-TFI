# Plataforma-TFI

Plataforma web del proyecto _TFI TOURISM AND CULTURE FUND
FOR INNOVATION SAS_

## Dependencias

- Dependencias de desarrollo simple
  1.  [Docker](https://www.docker.com/)
  2.  [Docker Compose](https://docs.docker.com/compose/)
- Dependencias de desarrollo completo
  1.  **Dependencias de desarrollo simple**
  2.  [node v16.16.0 LTS](https://nodejs.org/en/blog/release/v16.16.0)
  3.  OPCIONES Mysql server
      1. mysql docker image
      2. [Mysql native](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04-es)
      3. [PhpMyAdmin](https://www.phpmyadmin.net/)
  4.  [npm](https://www.npmjs.com/)

## Pasos para ejecutar

### Docker compose

#### Ejecucion

Se ejecuta el siguiente comando para construir e iniciar el proyecto

```bash
docker-compose up -d --build
```

#### Exterminio

Si se requiere eliminar el servidor completamente se usara este comando:

```bash
docker-compose down --rmi all
```

### Fragmentado

#### Backend

Entramos en la carpeta de backend y utilizamos los comandos encontrados en el _package.json_

> debe tener en cuenta que debe instalar los paquetes necesarios con "npm install" antes de ejecutar estos comandos

##### Iniciar con typescript

```
npm run dev
```

##### Construir el proyecto y ejecutar javascript generado

```
npm start
```
