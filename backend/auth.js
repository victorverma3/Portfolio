import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader)
        return res.status(401).json({ error: "Missing authorization token" });

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, SECRET);
        next();
    } catch (err) {
        res.status(403).json({ error: "Invalid or expired token" });
    }
};
