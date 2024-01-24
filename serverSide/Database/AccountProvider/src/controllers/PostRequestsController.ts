import AccountTemplate from '../modelTemplates/AccountTemplate';
import Account from '../models/Account';

export default class PostRequestsController {
    public static async createNewAccount(accountData: AccountTemplate): Promise<Account> {
        return await Account.create({
            email: accountData.getEmail,
            phone_number: accountData.getPhoneNumber,
            address: accountData.getAddress,
            description: accountData.getDescription,
            company_id: accountData.getCompanyId,
            user_id: accountData.getUserId,
            department_id: accountData.getDepartmentId,
            avatar_image_file_name: accountData.getAvatarImageFileName,
            avatar_background_color: accountData.getAvatarBackgroundColor,
            is_admin: accountData.getIsAdmin,
        });
    }
}