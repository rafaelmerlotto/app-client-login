export class AuthService {
    private iToken: string | undefined;

    constructor(private readonly url: string) { }

    get token{
        return this.iToken
    }

    async register(name: string, email: string, password:string): Promise<boolean>{
const res= await fetch()
    }
}