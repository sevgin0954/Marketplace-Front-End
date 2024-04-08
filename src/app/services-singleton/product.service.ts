import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product";
import { Constants } from "../../constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ProductService {
    private readonly CURRENT_URL = Constants.BACKEND_BASE_URL + "/products";

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        var products$ = this.http.get<Product[]>(this.CURRENT_URL, {
            headers: { 
                "Access-Control-Allow-Origin": Constants.FRONT_END_BASE_URL, 
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Content-Type": "application/problem+json; charset=utf-8"
            }
        });

        return products$;;
    }
}