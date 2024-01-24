export default class AccountTemplate {

    private email: string = '';
    private phoneNumber: string = '';
    private address: string = '';
    private description: string = '';
    private companyId: number = -1;
    private userId: number = -1;
    private departmentId: number = -1;
    private avatarImageFileName: string = '';
    private avatarBackgroundColor: string = '';
    private isAdmin: boolean = false;

    constructor(
        email: string,
        phoneNumber: string,
        address: string,
        description: string,
        companyId: number,
        userId: number,
        departmentId: number,
        avatarImageFileName: string,
        avatarBackgroundColor: string,
        isAdmin: boolean
    ) {
        this.setEmail = email;
        this.setDescription = description;
        this.setCompanyId = companyId;
        this.setUserId = userId;
        this.setDepartmentId = departmentId;
        this.setAvatarImageFileName = avatarImageFileName;
        this.setAvatarBackgroundColor = avatarBackgroundColor;
        this.setIsAdmin = isAdmin;
    }

    get getEmail(): string {
        return this.email;
    }

    set setEmail(value: string) {
        this.email = value;
    }

    get getPhoneNumber(): string {
        return this.phoneNumber;
    }

    set setPhoneNumber(value: string) {
        this.phoneNumber = value;
    }

    get getAddress(): string {
        return this.address;
    }

    set setAddress(value: string) {
        this.address = value;
    }

    get getDescription(): string {
        return this.description;
    }

    set setDescription(value: string) {
        this.description = value;
    }

    get getCompanyId(): number {
        return this.companyId;
    }

    set setCompanyId(value: number) {
        this.companyId = value;
    }

    get getUserId(): number {
        return this.userId;
    }

    set setUserId(value: number) {
        this.userId = value;
    }

    get getDepartmentId(): number {
        return this.departmentId;
    }

    set setDepartmentId(value: number) {
        this.departmentId = value;
    }

    get getAvatarImageFileName(): string {
        return this.avatarImageFileName;
    }

    set setAvatarImageFileName(value: string) {
        this.avatarImageFileName = value;
    }

    get getAvatarBackgroundColor(): string {
        return this.avatarBackgroundColor;
    }

    set setAvatarBackgroundColor(value: string) {
        this.avatarBackgroundColor = value;
    }

    get getIsAdmin(): boolean {
        return this.isAdmin;
    }

    set setIsAdmin(value: boolean) {
        this.isAdmin = value;
    }
}