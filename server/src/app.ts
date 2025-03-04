
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middlewares/errorHandler";
import messageRoutes from "./routes/messageRoutes";
import threadRoutes from "./routes/threadRoutes";

const app = express();


app.use(cors());
app.use(helmet());
app.use(express.json());


app.use("/api/threads", threadRoutes);
app.use("/api/messages", messageRoutes);

app.use(errorHandler);

export default app;
