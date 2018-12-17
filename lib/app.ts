import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { Rota } from "./rotas/rota";

class App {
    public app: express.Application;
    public minhasRotas: Rota = new Rota();
    public mongoUrl: string = 'mongodb://admin:admin@cluster0-shard-00-00-mpeik.gcp.mongodb.net:27017,cluster0-shard-00-01-mpeik.gcp.mongodb.net:27017,cluster0-shard-00-02-mpeik.gcp.mongodb.net:27017/servrod?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';  
    
    //no heroku https://pessoa-api.herokuapp.com/pessoa

    constructor() {
        this.app = express();
        this.config();  
        this.minhasRotas.rota(this.app);  
        this.mongoSetup();         
    }
    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }
}
export default new App().app;