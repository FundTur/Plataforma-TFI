FROM node:alpine

WORKDIR /usr/src/app

# Copiamos el package.json y el package-lock.json
COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]

# Instalamos las dependencias
RUN npm ci

# Copiamos el resto de los archivos
COPY ./src ./src

#JEJE PRUEBAS
#COPY generated_juls.sql /docker-entrypoint-initdb.d/

# Build the app
RUN npm run build

# Exponemos el puerto 3000
EXPOSE 3000

# Corremos el servidor
CMD [ "npm", "run", "dev" ]

