import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
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
  repoDemo;
  userGists;
  gistTemp;
  contributionChart;
  constructor(private route: ActivatedRoute, private _http: ApiService) {}

  ngOnInit() {
    // Get the parameter from the URL
    this.route.params.subscribe(routeParams => {
      this.currentUser = routeParams.user;
      this.getUser();
      this.getRepo();
      this.getGist();
    });
  }
  // getUser data
  getUser() {
    this.contributionChart = `https://ghchart.rshah.org/409ba5/${
      this.currentUser
    }`;
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
        this.repoDemo = data;
        this.userRepos = this.repoDemo.slice(0, 5);
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
  // get gists
  getGist() {
    this._http.getGist(this.currentUser).subscribe(
      data => {
        this.gistTemp = data;
        this.userGists = this.gistTemp.slice(0, 5);
      },
      error => {
        console.log(error);
      }
    );
  }
  // pagination
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.userRepos = this.repoDemo.slice(startItem, endItem);
  }
  gistChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.userGists = this.gistTemp.slice(startItem, endItem);
  }
}
