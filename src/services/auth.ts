import { HttpClient } from './service.js';

export interface User {
  id: number;
  username: string;
  email?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: User;
}

export class AuthService {
  private http: HttpClient;
  private static instance: AuthService;

  private constructor() {
    this.http = new HttpClient();
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      // Use HTTP-only cookie approach - the server should set the cookie
      const response = await this.http.post<AuthResponse>('/api/auth/login', credentials);
      return response;
    } catch (error) {
      return { success: false, message: "Login failed" };
    }
  }

  async logout(): Promise<void> {
    try {
      // Server will clear the HTTP-only cookie
      await this.http.post<void>('/api/auth/logout', {});
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  async checkAuth(): Promise<boolean> {
    try {
      // This endpoint should verify if the cookie is valid
      const response = await this.http.get<{authenticated: boolean}>('/api/auth/check');
      return response.authenticated;
    } catch (error) {
      return false;
    }
  }

  async getUser(): Promise<User | null> {
    try {
      const response = await this.http.get<{user: User | null}>('/api/auth/user');
      return response.user;
    } catch (error) {
      return null;
    }
  }
}