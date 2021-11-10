import type { NextApiRequest, NextApiResponse } from 'next'
import  queryDB from '../../../lib/database';


export default async function handler (req: NextApiRequest,res: NextApiResponse) {
    const method = req.method;
    const  { id }  = req.query;

    switch (method) {
        case "GET":
            const result = await queryDB ({
                query:'select * from drives where id = ?', 
                values:[id]
            });
            res.status(200).json({ data: result, method:method });
        break;
    
        case "DELETE":
            const delet = await queryDB({
                query:'delete from drives where id = (?);',
                values:[id]
            });
            res.status(200).json({data:delet, method:method});
        break;
        
        case "PUT":
            const { nome } = req.body;
            const alter = await queryDB({
                query:'update drives set nome = ? where id =?',
                values:[nome, id]
            });
            res.status(200).json({data:alter, method:method});
        break;

        default:
            res.status(505).json({ message: 'Internal error', method:method });
  }

  
}