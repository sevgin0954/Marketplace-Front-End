import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constants } from "../../constants";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }

    getNewJwtToken(email: string, password: string): Observable<string> {
        const url = Constants.BACKEND_BASE_URL + '/users/login';
        return this.http.post<string>(url, {
            email, password
        });
    }
}