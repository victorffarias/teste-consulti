import { createMocks } from "node-mocks-http";
import handler from "../../pages/api/atualizar-categoria";

test('Atualizar categoria', async () => {
    const { req, res } = createMocks({
        method: "PUT"
    })

    req.body.param = { 
        ID: 141,
        Nome: "teste",
        Descricao: "teste",
        Ordem: 1,
        Email: "victor.f.farias@gmail.com"
    }

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toBe("\"Registro atualizado com sucesso!\"")
})