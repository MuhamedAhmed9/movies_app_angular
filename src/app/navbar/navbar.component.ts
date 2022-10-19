import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoging: boolean = false;
  userInfo: any = null;
  constructor(private _authService: AuthService, private _Route: Router) {}

  ngOnInit(): void {
    this._authService.userData.subscribe({
      next: () => {
        if (this._authService.userData.getValue() != null) {
          this.isLoging = true;
          this.userInfo = this._authService.userData.getValue();
        } else {
          this.isLoging = false;
        }
      },
    });
  }

  searchMovie(e: any) {
    e.preventDefault();
    // console.log(e.target[0].value);
    this._Route
      .navigateByUrl('/RefreshComponent', { skipLocationChange: true })
      .then(() => {
        this._Route.navigate(['/search', e.target[0].value]);
      });
  }

  logout() {
    this._authService.logout();
  }
}
