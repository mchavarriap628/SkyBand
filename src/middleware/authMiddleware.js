const jwt = require("jsonwebtoken");


const protect = (req, res, next) => {

    //Esto le pide al body un header que va a ser el token que se genera en el login de JWT
    const authHeader = req.headers.authorization;

    //No hay token
    if (!authHeader) {
        return res.status(401).json({ message: "No autorizado" });
    }

    try {

        //Se crea una constante token con el valor que se le pasa del header
        const token = authHeader.split(" ")[1];
        //Decodifica el token usando la llave secreta en el archivo env
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        //continúa al controller
        next();

    } catch (error) {
        res.status(401).json({ message: "Token inválido" });
    }

};

module.exports = protect;