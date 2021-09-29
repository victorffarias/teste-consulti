import { NextApiRequest, NextApiResponse } from "next";
import { service } from "../../services/api";
import usePreflight from "./usePreflight";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await usePreflight(req, res);

        const categoriaId = req.query.id

        const result = await service.get(
            `CategoriaService.svc/ObterCategoriaPorCodigo/${categoriaId}`
        )

        result.data.ObterPorCodigoResult.Email = "victor.f.farias@gmail.com"
        
        return res.json(result.data);
    } catch (error: any) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
}