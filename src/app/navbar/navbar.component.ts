import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services-singleton/auth.service';
import { UserService } from '../services-singleton/user-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  user: User | null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser()
  }

}
