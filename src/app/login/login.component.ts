import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Constants } from '../../constants';
import { Subscription } from 'rxjs';
import { AuthService } from '../services-singleton/auth.service';
import { CookieService } from '../services-singleton/cookie.service';

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
    private router: Router
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

    this.getJwtTokenSubscription$ = this.authService.getNewJwtToken(this.email?.value!, this.password?.value!).subscribe(jwtToken => {
      this.coockieService.set(Constants.JWT_TOKEN_NAME, jwtToken, Constants.JWT_TOKEN_LIFETIME_SECONDS);
      this.router.navigate(['/']);
    });
  }

  ngOnDestroy(): void {
    this.getJwtTokenSubscription$.unsubscribe();
  }
}
