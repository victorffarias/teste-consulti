import { createMocks } from "node-mocks-http";
import handler from "../../pages/api/cadastrar-categoria";

test('Cadastrar categoria', async () => {
    const { req, res } = createMocks({
        method: "POST"
    })

    req.body.param = {
        Nome: "teste",
        Descricao: "teste",
        Ordem: 1,
        Email: "victor.f.farias@gmail.com"
    }

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toBe("\"Registro inserido com sucesso!\"")
})