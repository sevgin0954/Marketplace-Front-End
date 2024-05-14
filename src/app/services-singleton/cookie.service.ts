import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CookieService {
    set(name: string, value: string, maxAgeSeconds: number): void {
        document.cookie = `${name}=${value}; Max-Age=${maxAgeSeconds}`;
    }
}