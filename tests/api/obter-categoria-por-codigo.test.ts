import { createMocks } from "node-mocks-http";
import handler from "../../pages/api/obter-categoria-por-codigo";

test('Listar categoria', async () => {
    const { req, res } = createMocks({
        method: "GET"
    })

    req.query.id = 141;

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData()).ObterPorCodigoResult.Email).toBe("victor.f.farias@gmail.com");
    expect(JSON.parse(res._getData()).ObterPorCodigoResult.ID).toBe(141);
})