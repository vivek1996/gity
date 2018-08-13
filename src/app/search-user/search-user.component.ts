import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  currentUser;
  userDetails;
  constructor(private route: ActivatedRoute, private _http: ApiService) { }

  ngOnInit() {
      // Get the parameter from the URL
      this.route.params.subscribe(routeParams => {
        this.currentUser = routeParams.user;
      });
  }
  // getUser data
  getUser(name: string) {
    this._http.getUser(name).subscribe(
      data => {
        this.userDetails = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
