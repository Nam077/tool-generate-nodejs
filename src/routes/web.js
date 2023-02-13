import express from 'express';
import HomeController from '../controllers/HomeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', HomeController.checkAuth, HomeController.getHomePage);
    router.get('/json', HomeController.makeData);
    router.get('/login', HomeController.checkAuthLogin, HomeController.getLogin);
    router.post('/check-login', HomeController.checkLogin);

    return app.use('/', router);
};

module.exports = initWebRoutes;
