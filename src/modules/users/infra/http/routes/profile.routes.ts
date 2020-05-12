import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import ensureAuthenticaded from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticaded);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

export default profileRouter;
