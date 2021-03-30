import { Request, Response } from 'express';



export const profilePageController = (req: Request, res: Response) => {
    
    console.log('Session ::', req.session);
    if(req.session.auth){
        res.send(
            `<div>My Profile</div>
            <form action='/logout' method='post'>
                <button>logout</button>
            </form>
            `);
    }else{
        res.redirect('/login');
    }
   
}
