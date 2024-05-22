import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Constants } from '../../constants';
import { Subscription } from 'rxjs';
import { AuthService } from '../services-singleton/auth.service';
import { CookieService } from '../services-singleton/cookie.service';
import { UserService } from '../services-singleton/user-service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {

  private getJwtTokenSubscription$: Subscription;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  shouldDisplayFormsErrors: boolean = false;

  constructor(
    private authService: AuthService, 
    private coockieService: CookieService,
    private router: Router,
    private userService: UserService
  ) { }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.shouldDisplayFormsErrors = true;
      return;
    }

    this.getJwtTokenSubscription$ = this.authService.login(this.email?.value!, this.password?.value!).subscribe(login => {
      this.coockieService.set(Constants.JWT_TOKEN_NAME, login.token, Constants.JWT_TOKEN_LIFETIME_SECONDS);

      var user = new User(login.id, login.userName, this.email?.value!);
      this.userService.setCurrentUser(user);

      this.router.navigate(['/']);
    });
  }

  ngOnDestroy(): void {
    this.getJwtTokenSubscription$.unsubscribe();
  }
}
