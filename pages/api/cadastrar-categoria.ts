import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { service } from '../../services/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await NextCors(req, res, {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200
        });

        res.json({ message: 'CORS Preflight' });

        const result = await service.post(
            "CategoriaService.svc/CadastrarCategoria",  
            req.body.param
        );

        return result;
    } catch (error: any) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
}
