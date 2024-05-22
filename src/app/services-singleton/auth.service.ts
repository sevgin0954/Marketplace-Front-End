import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constants } from "../../constants";
import { Injectable } from "@angular/core";
import { Login } from "../models/login";

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<Login> {
        const url = Constants.BACKEND_BASE_URL + '/users/login';
        return this.http.post<Login>(url, {
            email, password
        });
    }
}