import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './../api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [NgbTabsetConfig]
})
export class ProfileComponent implements OnInit {
  profile: any;
  user: any;
  constructor(public auth: AuthService, config: NgbTabsetConfig, private _http: ApiService) {
    config.justify = 'fill';
    config.type = 'pills';
  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      this.user = this._http.getUser(this.profile.nickname);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.user = this._http.getUser(this.profile.nickname);
      });
    }
  }
}
