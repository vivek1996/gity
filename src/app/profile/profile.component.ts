import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [NgbTabsetConfig]
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(public auth: AuthService, config: NgbTabsetConfig) {
    config.justify = 'fill';
    config.type = 'pills';
  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }
}
