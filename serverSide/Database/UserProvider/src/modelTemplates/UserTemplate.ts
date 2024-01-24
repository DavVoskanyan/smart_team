export default class UserTemplate {

    private firstName: string = '';
    private lastName: string = '';
    private password: string = '';
    private birthDate: Date = new Date(0);

     constructor (
         firstName: string,
         lastName: string,
         phoneNumber: string,
         address: string,
         password: string,
         birthDate: Date
     ) {
         this.setFirstName = firstName;
         this.setLastName = lastName;
         this.setPhoneNumber = phoneNumber;
         this.setAddress = address;
         this.setPassword = password;
         this.setBirthDate = birthDate;
    }

    get getFirstName(): string {
         return this.firstName;
    }
    set setFirstName(value: string) {
        this.firstName = value;
    }

    get getLastName(): string {
        return this.lastName;
    }
    set setLastName(value: string) {
        this.lastName = value;
    }

    get getPhoneNumber(): string {
        return this.lastName;
    }
    set setPhoneNumber(value: string) {
        this.lastName = value;
    }

    get getAddress(): string {
        return this.lastName;
    }
    set setAddress(value: string) {
        this.lastName = value;
    }

    get getPassword(): string {
        return this.password;
    }
    set setPassword(value: string) {
        this.password = value;
    }

    get getBirthDate(): Date {
        return this.birthDate;
    }
    set setBirthDate(value: Date) {
        this.birthDate = value;
    }
}