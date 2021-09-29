import { createMocks } from "node-mocks-http";
import handler from "../../pages/api/excluir-categoria";

test('Atualizar categoria', async () => {
    const { req, res } = createMocks({
        method: "DELETE"
    })

    req.query.id = 157;


    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toBe("Registro excluído com sucesso!")
})