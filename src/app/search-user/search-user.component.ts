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
  userRepos;
  userFollowers;
  userFollowing;
  constructor(private route: ActivatedRoute, private _http: ApiService) {}

  ngOnInit() {
    // Get the parameter from the URL
    this.route.params.subscribe(routeParams => {
      this.currentUser = routeParams.user;
      this.getUser();
      this.getRepo();
      this.getFollowers();
      this.getFollowing();
    });
  }
  // getUser data
  getUser() {
    this._http.getUser(this.currentUser).subscribe(
      data => {
        this.userDetails = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  // Get repos
  getRepo() {
    this._http.getRepo(this.currentUser).subscribe(
      data => {
        let repoDemo;
        repoDemo = data;
        this.userRepos = repoDemo.slice(0, 10);
      },
      error => {
        console.log(error);
      }
    );
  }
  // Get followers
  getFollowers() {
    this._http.getFollowers(this.currentUser).subscribe(
      data => {
        this.userFollowers = data;
        // console.log(this.followers);
      },
      error => {
        console.log(error);
      }
    );
  }
  // Get following
  getFollowing() {
    this._http.getFollowing(this.currentUser).subscribe(
      data => {
        this.userFollowing = data;
        // console.log(this.following);
      },
      error => {
        console.log(error);
      }
    );
  }
}
