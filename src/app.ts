import express, { Application } from 'express';
import morgan from 'morgan';
import IndexRoutes from './routes/indexRoutes';
import LoginRoutes from './routes/loginRoutes';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';
import connectRedis from 'connect-redis';
import redis from 'redis';
const RedisStore = connectRedis(expressSession);


declare module 'express-session' {
    interface SessionData {
        auth: boolean,
        count: number
    }
}


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
            resave: false,
            saveUninitialized:true,
            store: new RedisStore({client: redis.createClient(6379, "localhost")})
        }));
         
        
        
    }

    private initRoutes(){
        this.app.use(IndexRoutes);
        this.app.use(LoginRoutes);
    }

    async listen(){
         
        await this.app.listen (this.app.get('port'));
        console.log(`Server on port ${this.app.get('port')}`);
    }

}