import App from "./app";
import riotController from "./controllers/releaseControllers";
import "dotenv/config"
const port = parseInt(process.env.PORT as string, 10) || 5000;

/**
 * Initialize App with controllers and port
 */
const app = new App([new riotController()],
    port
);

app.listen();
