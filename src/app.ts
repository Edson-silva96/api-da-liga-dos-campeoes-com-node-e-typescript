import express from "express";
import router from "./routes";
import cors from "cors";

function createApp() {
    const app = express();

    app.use(express.json());
    app.use("/api", router);

    const corsOptions = {
        origin: "*", // ou "http://" ou qualquer domínio específico
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // 
        allowedHeaders: "Content-Type,Authorization", // Allow specific headers
    }// com o cors  quem pode usar a api

    app.use(cors())

    return app;
}

export default createApp;
