const protect = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");

//Mockeamos JWT
jest.mock("jsonwebtoken");

describe("Middleware protect", () => {

    it("debería retornar 401 si no hay token", () => {

        const req = {
            headers: {}
        };

        const res = {
            //Simulamos response
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        //Simulamos next()
        const next = jest.fn();

        protect(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: "No autorizado" });
        expect(next).not.toHaveBeenCalled();

    });

    it("debería retornar 401 si el token es inválido", () => {

        const req = {
            //Simulamos request
            headers: {
                authorization: "Bearer token_falso"
            }
        };

        const res = {
            //Simulamos response
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        //Simulamos next()
        const next = jest.fn();

        jwt.verify.mockImplementation(() => {
            throw new Error("Token inválido");
        });

        protect(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: "Token inválido" });
        expect(next).not.toHaveBeenCalled();

    });

    it("debería llamar next() si el token es válido", () => {

        const req = {
            //Simulamos request
            headers: {
                authorization: "Bearer token_valido"
            }
        };

        const res = {
            //Simulamos response
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        //Simulamos next()
        const next = jest.fn();

        const decodedData = { id: "123", role: "admin" };

        jwt.verify.mockReturnValue(decodedData);

        protect(req, res, next);

        expect(req.user).toEqual(decodedData);
        expect(next).toHaveBeenCalled();

    });

});