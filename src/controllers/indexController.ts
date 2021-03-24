import { Request, Response } from 'express';


export const indexController = (req: Request, res: Response) => {

    console.log('Session : ', req.session);

    res.json({ msg : 'Welcome to 1127 server! '});
     
}