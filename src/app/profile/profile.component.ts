import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { ApiService } from './../api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;
  user: any;
  repos: any;
  events: any;
  private userId: string;
  constructor(public auth: AuthService, private _http: ApiService) {}

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      this.userId = this.profile.nickname;
      this._http.getUser(this.userId).subscribe(
        data => {
          this.user = data;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.userId = this.profile.nickname;
        this._http.getUser(this.userId).subscribe(
          data => {
            this.user = data;
          },
          error => {
            console.log(error);
          }
        );
      });
    }
  }
  // Get repos
  getRepo() {
    this._http.getRepo(this.userId).subscribe(
      data => {
        this.repos = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  // get events
  getEvents() {
    this._http.getEvents(this.userId).subscribe(
      data => {
        this.events = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
