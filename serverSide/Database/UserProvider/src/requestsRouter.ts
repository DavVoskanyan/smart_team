import express, {Request, Response} from 'express';
import GetRequestsController from './controllers/GetRequestsController';
import PostRequestsController from './controllers/PostRequestsController';
import UserTemplate from './modelTemplates/UserTemplate';
import User from './models/User';

const router = express.Router();

router.get('/:userId', (request: Request, response: Response): void => {
    const userIdFromURL: number = parseInt(request.params['userId']);
    console.log(`user id is: ${userIdFromURL}`);

    if(userIdFromURL && !isNaN(userIdFromURL)) {
        console.log('User id is valid!');
        GetRequestsController.getUserById(userIdFromURL)
            .then( (result: UserTemplate) => {
                console.log(result)
                response.json(result)
            } )
            .catch( error => console.log(error.message) );
    }
    else {
        response.json({
            error: true,
            message: 'Invalid user id'
        });
    }
});

router.post('/', (request: Request, response: Response): void => {
    const requestInfo = request.body;
    const newUser = new UserTemplate(
        requestInfo['firstName'],
        requestInfo['lastName'],
        requestInfo['phoneNumber'],
        requestInfo['address'],
        requestInfo['password'],
        requestInfo['birthDate']
    );

    PostRequestsController.createNewUser(newUser)
        .then(data => response.json({status: 'success', data: data}))
        .catch(error => response.json({status: 'fail', message: error.message}));
});


export default router;