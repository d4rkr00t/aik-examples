import createApp from './app';
import routes from './routes';

const app = createApp('.todoapp');

routes(app);
