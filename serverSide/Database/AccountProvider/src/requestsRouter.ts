import express, {Request, Response} from 'express';
import GetRequestsController from './controllers/GetRequestsController';
import PostRequestsController from './controllers/PostRequestsController';
import AccountTemplate from './modelTemplates/AccountTemplate';
import Account from './models/Account';

const router = express.Router();

router.get('/byAccountId/:accountId', (request: Request, response: Response): void => {
    const accountIdFromURL: number = parseInt(request.params['accountId']);
    console.log(`account id is: ${accountIdFromURL}`);

    if(accountIdFromURL && !isNaN(accountIdFromURL)) {
        console.log('Account id is valid!');
        GetRequestsController.getAccountById(accountIdFromURL)
            .then( (result: AccountTemplate) => {
                console.log(result)
                response.json(result)
            } )
            .catch( error => console.log(error.message) );
    }
    else {
        response.json({
            error: true,
            message: 'Invalid account id'
        });
    }
});

router.get('/byUserId/:userId', (request: Request, response: Response): void => {
    const userIdFromURL: number = parseInt(request.params['userId']);
    console.log(`User id is: ${userIdFromURL}`);

    if(userIdFromURL && !isNaN(userIdFromURL)) {
        console.log('User id is valid!');
        GetRequestsController.getAccountsByUserId(userIdFromURL)
            .then( (result: Array<AccountTemplate>) => {
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

router.get('/byCompanyId/:companyId', (request: Request, response: Response): void => {
    const companyIdFromURL: number = parseInt(request.params['companyId']);
    console.log(`Company id is: ${companyIdFromURL}`);

    if(companyIdFromURL && !isNaN(companyIdFromURL)) {
        console.log('Company id is valid!');
        GetRequestsController.getAccountsByCompanyId(companyIdFromURL)
            .then( (result: Array<AccountTemplate>) => {
                console.log(result)
                response.json(result)
            } )
            .catch( error => console.log(error.message) );
    }
    else {
        response.json({
            error: true,
            message: 'Invalid company id'
        });
    }
});


router.post('/', (request: Request, response: Response): void => {
    const requestInfo = request.body;
    const newAccount: AccountTemplate = new AccountTemplate(
        requestInfo['email'],
        requestInfo['phoneNumber'],
        requestInfo['address'],
        requestInfo['description'],
        requestInfo['companyId'],
        requestInfo['userId'],
        requestInfo['departmentId'],
        requestInfo['avatarImageFileName'],
        requestInfo['avatarBackgroundColor'],
        requestInfo['isAdmin'],
    );

    PostRequestsController.createNewAccount(newAccount)
        .then(data => response.json({status: 'success', data: data}))
        .catch(error => response.json({status: 'fail', message: error.message}));
});


export default router;