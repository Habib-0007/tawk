import app from "./app";
import { env } from "./config/environment";

const startServer = () => {
  const PORT = env.PORT;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${env.NODE_ENV}`);
  });
};

startServer();
