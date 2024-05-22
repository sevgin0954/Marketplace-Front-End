import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({providedIn: 'root'})
export class UserService {
    private readonly ID_KEY = 'User_Id';
    private readonly EMAIL_KEY = 'User_Email';
    private readonly USERNAME_KEY = 'User_Username';

    getCurrentUser(): User | null {
        var userId = localStorage.getItem(this.ID_KEY);
        
        if (userId == null)
            return null;

        var userName = localStorage.getItem(this.USERNAME_KEY);
        var userEmail = localStorage.getItem(this.EMAIL_KEY);
        var user = new User(userId!, userName!, userEmail!);

        return user;
    }

    setCurrentUser(user: User): void {
        localStorage.setItem(this.ID_KEY, user.id);
        localStorage.setItem(this.USERNAME_KEY, user.username);
        localStorage.setItem(this.EMAIL_KEY, user.email);
    }
}