import { Request, Response } from 'express';



export const loginController = (req: Request, res: Response) => {
    
    const { id, password } = req.body;

    console.log("login request :: ",req.body);

  
    if(id === 'admin' && password == '123'){
        console.log("비밀번호 일치");
        req.session.auth = true;
   
        res.json({msg : 'login success!'});

    }else{
        res.status(403).json({msg : 'login failed..'})
    }
   
}

export const logoutController = (req: Request, res: Response) => {
    
    req.session.destroy( () => {
        res.redirect('/');
    })
   
}

export const loginPageController = (req: Request, res: Response) => {
    
    res.send(
    `<h1>LOGIN</h1>
        <form action='/login' method='post'>
            Username : <input type='text' name='id'/><br/></br>
            Password : <input type='password' name='password'/></br/></br/>
            <input type='submit' value='login'/>
        </form>`
    )
}