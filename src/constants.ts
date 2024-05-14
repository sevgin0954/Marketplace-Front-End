export class Constants {
    public static readonly BACKEND_BASE_URL: string = "https://localhost:7504";
    public static readonly FRONT_END_BASE_URL: string = "http://localhost:4200";
    public static readonly JWT_TOKEN_NAME: string = 'auth_coockie';
    public static readonly JWT_TOKEN_LIFETIME_MINUTES: number = 120;
    public static readonly JWT_TOKEN_LIFETIME_SECONDS: number = this.JWT_TOKEN_LIFETIME_MINUTES * 60;
}