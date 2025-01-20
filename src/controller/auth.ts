
import { Request, Response } from 'express';

class auth {
    async printName(req: Request, res: Response): Promise<void> {
        
        try{
            // const { nome } = req.body;
            // console.log(nome, " nome aqui atraz");
            const data = "bateram aqui o aiai ";
            // if(nome === 'henrique'){
               //  throw new Error('Henrique e nome de bixa');
            // }
            res.status(201).json({ data });
        } catch (error: any){
            res.status(409).json({ message: error.message });
        }
        
    }
}

export default new auth();
