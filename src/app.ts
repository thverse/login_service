import express, { Application } from 'express';
import morgan from 'morgan';
import IndexRoutes from './routes/indexRoutes';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';


export class App {

    private app: Application;
    
    constructor(private port?: number){
        this.app = express();
        this.settings();
        this.middlewares(); 
        this.initRoutes();
    }

    private settings(){
         this.app.set('port', this.port || process.env.PORT || 1127);
         
    }

    private middlewares(){
        this.app.use(morgan('dev')); 
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(expressSession({
            secret: 'my server key',       
            resave: true,
            saveUninitialized:true
        }));
         
        
        
        출처: https://3dmpengines.tistory.com/1870 [3DMP]
        
    }

    private initRoutes(){
        this.app.use(IndexRoutes);
    }

    async listen(){
         
        await this.app.listen (this.app.get('port'));
        console.log(`Server on port ${this.app.get('port')}`);
    }

}