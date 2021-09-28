import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { api } from '../../services/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await NextCors(req, res, {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200
        });

        res.json({ message: 'Hello NextJs Cors!' });

        const data = await api.post(
            "CategoriaService.svc/CadastrarCategoria",  
            req.body.param
        );

        return data;
    } catch (error: any) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
}
