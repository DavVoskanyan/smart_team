import express, {Request, Response} from 'express';
import GetRequestController from '../controllers/GetRequestController';

const router = express.Router();

router.get('/users', (request: Request, response: Response): void => {
    GetRequestController.getAllUsers()
        .then( result => response.json(result) )
        .catch( error => console.log(error.message) );
});

router.get('/users/getUserById/:userId', (request: Request, response: Response): void => {
    GetRequestController.getUserById(parseInt(request.params.userId))
        .then( result => response.json(result) )
        .catch( error => console.log(error.message) );
})

export default router;