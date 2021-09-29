import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

export default async function usePreflight(req: NextApiRequest, res: NextApiResponse) {
        try {
            const result = await NextCors(req, res, {
                methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
                origin: '*',
                optionsSuccessStatus: 200
            });
            
            return result;
        } catch(error: any) {
            console.error(error);
            return res.status(error.status || 500).end(error.message)
        }
}