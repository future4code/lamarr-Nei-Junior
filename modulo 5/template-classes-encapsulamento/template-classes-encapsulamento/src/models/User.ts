export class User {
    private id: string;
    private email: string;
    private password: string;

    constructor(id: any, email:any, password:any){
        this.id = id;
        this.email = email.
        this.password = password;
    }


    public getId() {
        return this.id
    }
    public getmail() {
        return this.email
    }
    public getPassword() {
        return this.password
    }
    public setPassword(newPassword: string) {
        this.password = newPassword
    }
    public setEmail(newEmail: string) {
        this.email = newEmail
    }
}