import { Router } from 'express'
import  Devcontroller from './controllers/DevController.js'
import  SearchController from './controllers/SearchController.js'

// index, show, store, update, destroy

const routes = Router();

routes.get('/devs', Devcontroller.index);
routes.get('/search', SearchController.index)

routes.post('/devs', Devcontroller.store);
routes.put('/update/:github_username', Devcontroller.update);
routes.delete('/destroy/:github_username', Devcontroller.destroy);

export default routes;