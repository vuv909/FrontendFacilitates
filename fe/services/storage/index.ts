import { jwtDecode } from "jwt-decode";

const TOKEN = "accessToken";

export class StorageService {
  constructor() {}

  static getUser(): any | string {
    const token = this.getToken(); // Invoke the getToken method
    if (token) {
      const decodedToken: any = null;
      try {
        const decodedToken: any = jwtDecode(token);
        return decodedToken; // Assuming 'sub' contains the email in your token
      } catch (e) {
        return "";
      }
    }
    return "";
  }

  static getToken(): string | null {
    if (typeof window !== "undefined") {
      return (window as any).localStorage.getItem(TOKEN);
    }
    return null;
  }

  static saveToken(token: string): void {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.setItem(TOKEN, token);
    }
  }

  static isLoggedIn(): boolean {
    if (this.getToken() === null) {
      return false;
    }
    return true;
  }

  static signout() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(TOKEN);
    }
  }
}
