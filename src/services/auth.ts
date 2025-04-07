export interface User {
  id: string;
  username: string;
  email?: string;
  // Add more fields as needed
}

export class AuthService {
  private static instance: AuthService;
  private _user: User | null = null;
  private _isAuthenticated = false;
  private _token: string | null = null;

  private constructor() {
    // Load auth state from localStorage on initialization
    this.loadAuthState();
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(username: string, password: string): Promise<boolean> {
    try {

      console.log("username: ", username, "password: ", password);

      // For demo purposes - replace with actual API call
      if (username === 'admin' && password === 'admin123') {
        this._user = {
          id: '1',
          username: 'admin',
          email: 'admin@example.com'
        };
        this._isAuthenticated = true;
        this._token = 'demo-token-12345';

        // Save auth state to localStorage
        this.saveAuthState();
        return true;
      }

      // For real implementation:
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password })
      // });
      // 
      // if (response.ok) {
      //   const data = await response.json();
      //   this._user = data.user;
      //   this._token = data.token;
      //   this._isAuthenticated = true;
      //   this.saveAuthState();
      //   return true;
      // }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  public logout(): void {
    this._user = null;
    this._isAuthenticated = false;
    this._token = null;
    localStorage.removeItem('authState');
  }

  public isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  public getUser(): User | null {
    return this._user;
  }

  public getToken(): string | null {
    return this._token;
  }

  private saveAuthState(): void {
    const authState = {
      user: this._user,
      token: this._token,
      isAuthenticated: this._isAuthenticated
    };
    localStorage.setItem('authState', JSON.stringify(authState));
  }

  private loadAuthState(): void {
    const authStateStr = localStorage.getItem('authState');
    if (authStateStr) {
      try {
        const authState = JSON.parse(authStateStr);
        this._user = authState.user;
        this._token = authState.token;
        this._isAuthenticated = authState.isAuthenticated;
      } catch (e) {
        console.error('Failed to parse auth state from localStorage');
      }
    }
  }
}


export const auth = AuthService.getInstance();