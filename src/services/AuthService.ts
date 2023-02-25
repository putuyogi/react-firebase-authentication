import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    deleteUser, Auth, UserCredential, User
} from "firebase/auth";

const AUTH_SESSION_KEY = 'user_data';

export default class AuthService {
    private _auth: Auth;

    constructor() {
        this._auth = getAuth();
    }

    public async signUp(email: string, password: string): Promise<UserCredential> {
        return await createUserWithEmailAndPassword(this._auth, email, password);
    }

    public async signIn(email: string, password: string): Promise<UserCredential> {
        let userData = await signInWithEmailAndPassword(this._auth, email, password);
        localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(userData.user));
        return userData
    }

    public async remove(user: User): Promise<void> {
        return await deleteUser(user);
    }

    public logout(): void {
        localStorage.removeItem(AUTH_SESSION_KEY);
    }

    public isAuthenticate(): boolean {
        const userData = localStorage.getItem(AUTH_SESSION_KEY);
        return userData !== undefined && userData !== null
    }

    public getUserData(): User | null {
        if (this.isAuthenticate()) {
            return JSON.parse(localStorage.getItem(AUTH_SESSION_KEY)!);
        }
        return null
    }
}