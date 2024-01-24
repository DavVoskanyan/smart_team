import Account from '../models/Account';
import AccountTemplate from '../modelTemplates/AccountTemplate';

export default class GetRequestsController {
    public static async getAccountById(accountId: number): Promise<Account> {
        return Account.findOne({
            where: {
                id: accountId,
            },
            limit: 1,
        });
    }
    public static async getAccountsByUserId(userId: number): Promise<Array<Account>> {
        return Account.findAll({
            where: {
                user_id: userId,
            },
        });
    }
    public static async getAccountsByCompanyId(companyId: number): Promise<Array<Account>> {
        return Account.findAll({
            where: {
                company_id: companyId,
            },
        });
    }
}