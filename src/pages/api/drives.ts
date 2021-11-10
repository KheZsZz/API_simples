// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import  queryDB from '../../lib/database';


export default async function handler (req: NextApiRequest,res: NextApiResponse) {
  const method = req.method;

  switch (method) {
    case "GET":
      const result = await queryDB ({
        query:'Select * from Drives', 
        value:[]
      });
      res.status(200).json({ data: result, method:method });
    break;

    case "POST":
      const { nome } = req.body;
      const insert = await queryDB({
        query:'Insert Into Drives(nome) values(?)',
        values:[nome]
      });
      res.status(200).json({data:insert , method:method});
    break;

    default:
      res.status(505).json({ message: 'Internal error', method:method });
  }

  
}


