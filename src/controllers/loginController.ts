import { Request, Response } from 'express';



export const loginController = (req: Request, res: Response) => {
    const { id, password } = req.body;

  
    if(id === 'admin' && password == '123'){
        console.log("비밀번호 일치");
        req.session.auth = true;
   
        res.json({msg : 'login success!'})

    }else{
        res.status(403).json({msg : 'Bad credentials'})
    }
   
}