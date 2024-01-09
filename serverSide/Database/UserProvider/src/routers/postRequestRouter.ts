import express, {Request, Response} from 'express';
import PostRequestController from '../controllers/PostRequestController';

const router = express();

router.post('/users', (request: Request, response: Response): void => {
    PostRequestController.createUser(request.body['userData'])
        .then( result => response.json(result) )
        .catch( error => console.log(error.message) );
});

router.post('/users/getUserById/:userId', (request: Request, response: Response): void => {
    PostRequestController.createManyUsers()
        .then( result => response.json(result) )
        .catch( error => console.log(error.message) );
})

export default router;