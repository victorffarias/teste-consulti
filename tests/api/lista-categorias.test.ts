import { createMocks } from "node-mocks-http";
import handler from "../../pages/api/listar-categorias-por-email";

test('Listar categoria', async () => {
    const { req, res } = createMocks({
        method: "GET"
    })

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData()).ObterCategoriasPorEmailResult.length).toBeGreaterThan(0)
})