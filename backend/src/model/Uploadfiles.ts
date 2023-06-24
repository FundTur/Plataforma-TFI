import express, { Application } from 'express';
import * as index from '../index';
import cors from 'cors';
import routerUpload from '../controller/uploadfiles.routes';
//definimos una clase y la exportamos por default
class Server{

    private app: Application; 
    private path = {
        upload: "/upload"
    }
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
         

    }
    

    //leer los json que llegan o devuelven de los middlewares
    middlewares(){
        this.app.use(express.json())
        this.app.use(
            cors({
                origin: "*", //poner direccion ip con el puerto de origen OJO
                methods: "GET, POST, PUT, PATCH, DELETE",
                preflightContinue: false,
                optionsSuccessStatus: 204,
            }

            ))
    }

    routes(){
        this.app.use(this.path.upload, routerUpload);
    }
}

    

export default Server;
