import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OngsController from './controllers/OngsController'

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/ongs', OngsController.index);
routes.get('/ongs/:id', OngsController.show);
routes.post('/ongs', upload.array('images'), OngsController.create);
routes.delete('/ongs/:id', OngsController.delete);

export default routes;