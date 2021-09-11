export class SignUp {
    public firstName: string;
    public lastName: string;
    public email: string;
    public otpNum: number;
    public password: string;
    public confirmPassword: string;

    constructor(fname:string, lname:string, email:string, otpNum:number, pwd:string, cnfPwd:string){
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.otpNum = otpNum;
        this.password = pwd;
        this.confirmPassword = cnfPwd;
    }

}